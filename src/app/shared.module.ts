import { NgModule } from '@angular/core';
import {
  DatePipe,
  NgClass,
  NgFor,
  NgIf,
  NgTemplateOutlet,
} from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilesizePipe } from './filesize.pipe';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    NgFor,
    NgIf,
    NgClass,
    NgTemplateOutlet,
    RouterLink,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    FilesizePipe,
    NavComponent,
  ],
  exports: [
    NgFor,
    NgIf,
    NgClass,
    NgTemplateOutlet,
    RouterLink,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    FilesizePipe,
    NavComponent,
  ],
})
export class SharedModule {}
