import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', redirectTo: '/sample-videos', pathMatch: 'full' },
    { path: 'contect-us', component: ContactUsComponent },
    { path: 'about', component: AboutComponent },
    { path: ':slug', component: HomeComponent }
];
