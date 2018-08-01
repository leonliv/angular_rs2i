import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { HomeComponent } from '../home/containers/home/home.component';

const appRoutes: Routes = [
  { path: 'page-not-found', component: HomeComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(
    appRoutes
    )
  ]
})

export class PageNotFoundRoutingModule { }
