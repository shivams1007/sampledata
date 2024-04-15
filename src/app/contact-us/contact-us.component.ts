import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  appService: AppService = inject(AppService);
  firestore: Firestore = inject(Firestore);
  ShowAlertMessage: boolean = false;
  alertMessage: string = 'Send Successfully';

  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });

    this.appService.setCanonicalURL();
    this.appService.setDescription(
      'Connect effortlessly with Sample Datas Contact Us page. Access a variety of media types for free - images, videos, files, and more!'
    );
    this.appService.setTitle('Contact Us | Sample Data');
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      try {
        const docRef = await addDoc(collection(this.firestore, 'contactUs'), {
          fullName: formData.fullName,
          email: formData.email,
          message: formData.message,
        });
        this.ShowAlertMessage = true;
        this.contactForm.reset();
        setTimeout(() => {
          this.ShowAlertMessage = false;
        }, 3000);
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
