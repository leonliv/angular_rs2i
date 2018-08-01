import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'page-not-found', component: PageNotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(
    appRoutes
    )
  ]
})

export class PageNotFoundRoutingModule { }
