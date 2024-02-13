import { Component, OnInit, inject } from '@angular/core';
import { AppService } from '../app.service';
import { SharedModule } from '../shared.module';

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

  public categories: any[] = [];
  public Formates: any[] = [];
  public isFilesData: any[] = [];

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.appService.fetchData().subscribe(data => {
      this.categories = data;
      console.log(this.categories)
      this.showFirstData();
    });
  }

  showFirstData() {
    if (this.categories.length > 0) {
      const firstCategoryId = this.categories[0].category_id;
      this.activeFiles(firstCategoryId);
    }
  }

  // activeFormates(id: any) {
  //   this.Formates = this.categories.flatMap((data: any) => data.sub_category
  //     .filter((subData: any) => subData.id === id));
  //   console.log(this.Formates);
  // }

  activeFiles(category_id: any, sub_category_id?: any) {
    this.isFilesData = this.categories.filter((data: any) => data.category_id === category_id)
  }
}
