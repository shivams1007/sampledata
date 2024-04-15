import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared.module';
import { AppService } from '../app.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  currentYear: number;
  appService: AppService = inject(AppService);

  constructor() {
    this.currentYear = new Date().getFullYear();
    this.appService.setCanonicalURL();
    this.appService.setDescription(
      'Explore a diverse array of data: images, videos, files, audio, and more. Free to download and use for all your creative projects.'
    );
    this.appService.setTitle('About Us | Sample Data');
  }
}
