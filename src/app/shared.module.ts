import { NgModule } from '@angular/core';
import { DatePipe, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ]
})
export class SharedModule { }