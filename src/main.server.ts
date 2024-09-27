import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/services/app.component';
import { config } from './app/services/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
