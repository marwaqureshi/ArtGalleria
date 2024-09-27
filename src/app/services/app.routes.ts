import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtPieceListComponent } from '../components/art-piece-list/art-piece-list.component';
import { ArtPieceDetailComponent } from '../components/art-piece-detail/art-piece-detail.component';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [ 
    { path: '', redirectTo: '/art-pieces', pathMatch: 'full' },
    { path: 'art-pieces', component: ArtPieceListComponent },
    { path: 'art-piece/:id', component: ArtPieceDetailComponent },
    { path: 'admin', component: AdminDashboardComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }