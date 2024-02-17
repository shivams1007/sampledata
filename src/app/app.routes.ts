import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/sample-videos', pathMatch: 'full' },
    { path: ':slug', component: HomeComponent },
];
