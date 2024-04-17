import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.routes'),
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.routes'),
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./contact-us/contact-us.routes'),
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.routes'),
      },
      {
        path: ':slug',
        loadChildren: () => import('./home/home.routes'),
      },
    ],
  },
];
