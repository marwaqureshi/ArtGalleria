import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArtPieceListComponent } from '../components/art-piece-list/art-piece-list.component'; 
import { ArtPieceDetailComponent } from '../components/art-piece-detail/art-piece-detail.component'; 
import { InquiryFormComponent } from '../components/inquiry-form/inquiry-form.component'; 
import { UserAuthenticationComponent } from '../components/user-authentication/user-authentication.component'; 
import { routes } from './app.routes';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtPieceDetailComponent,
    InquiryFormComponent,
    UserAuthenticationComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideHttpClient() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }