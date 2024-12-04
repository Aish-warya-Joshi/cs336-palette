import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"palette-7d9ed","appId":"1:904797604195:web:0f476f2cd9780caa5d2b56","storageBucket":"palette-7d9ed.firebasestorage.app","apiKey":"AIzaSyARS9l3TFZD1i6qIHBDiDwUiL1-gPoU3J0","authDomain":"palette-7d9ed.firebaseapp.com","messagingSenderId":"904797604195"})), provideFirestore(() => getFirestore())]
};
