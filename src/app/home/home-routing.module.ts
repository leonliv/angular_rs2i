import { NgModule } from '@angular/core';
import { HomeComponent } from './containers/home/home.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(
    appRoutes
    )
  ]
})
export class HomeRoutingModule { }
