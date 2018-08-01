import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
import { HomeComponent } from '../home/containers/home/home.component';

const appRoutes: Routes = [
  { path: 'login', component: HomeComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(
    appRoutes
    )
  ]
})

export class LoginRoutingModule { }
