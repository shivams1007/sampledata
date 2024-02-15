import { SubCategory } from './../app.interface';
import { Component, OnInit, inject, Pipe } from '@angular/core';
import { AppService } from '../app.service';
import { SharedModule } from '../shared.module';
import { Category } from '../app.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  appService: AppService = inject(AppService)
  constructor() { }

  public categories: Category[] = [];
  totalWords: number | undefined;
  generatedText: string = '';
  showTextArea: boolean = false;
  selectedCategory: Category | undefined = undefined;

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.appService.fetchData().subscribe(data => {
      this.categories = data;
      console.log("🚀 ~ HomeComponent ~ this.appService.fetchData ~ categories:", this.categories)
      if (this.categories.length > 0) {
        this.selectCategory(this.categories[0])
      }
    });
  }


  selectCategory(category: Category, subcategory_id: number | null = null) {
    const categoryCopy = JSON.parse(JSON.stringify(category));
    if (subcategory_id) {
      categoryCopy.sub_category = categoryCopy.sub_category.filter((data: any) => data.id === subcategory_id)
    }
    this.selectedCategory = categoryCopy;
  }

  generateText() {
    if (this.totalWords) {
      this.appService.generatesampelText(this.totalWords).subscribe(
        (text: string) => {
          this.generatedText = text;
          this.showTextArea = true;
        },
        (error: any) => {
          console.error('Error generating text:', error);
        }
      );
    } else {
      this.showTextArea = false;
      this.generatedText = '';
    }
  }

  downloadData(url: string) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'sampleData';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error downloading image:', error));
  }

  copyText() {
    const textarea = document.createElement('textarea');
    textarea.value = this.generatedText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}
