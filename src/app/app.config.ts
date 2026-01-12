import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // provideHttpClient() is the modern Angular way to enable HTTP requests in your app.
  providers: [provideHttpClient(), provideBrowserGlobalErrorListeners(), provideRouter(routes)],
};
