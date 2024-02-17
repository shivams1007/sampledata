import { AppService } from './app.service';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

const firebaseConfig = {
  apiKey: "AIzaSyCPJ8CPE8TKdyPYVvWrS4-rFzZ3W_qM954",
  authDomain: "sampledata-3b76e.firebaseapp.com",
  projectId: "sampledata-3b76e",
  storageBucket: "sampledata-3b76e.appspot.com",
  messagingSenderId: "680243427139",
  appId: "1:680243427139:web:59dafbd0660023568c21f6",
  measurementId: "G-16Y20G23QX"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideClientHydration(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    ])
  ]
};
