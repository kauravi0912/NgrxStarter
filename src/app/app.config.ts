import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideUserServices } from './services/provide-user-services';
import { AsyncPipe } from '@angular/common';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    // provideUserServices(),
    provideHttpClient(withInterceptorsFromDi()),
    AsyncPipe,
    provideStoreDevtools({
      logOnly: !isDevMode,
      maxAge: 30,
      connectInZone: true,
    }),
  ],
};
