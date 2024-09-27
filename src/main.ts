import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/services/app.config';
import { AppComponent } from './app/services/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
