import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './containers/add/add.component';
import { ListComponent } from './containers/list/list.component';
import { LivresComponent } from './containers/livres/livres.component';
import { AddReactiveComponent } from './containers/add-reactive/add-reactive.component';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
   pathMatch: 'full'
},

  { path: 'list', component: ListComponent },
  { path: 'livrees', component: LivresComponent },
  { path: 'add', component: AddComponent },
  { path: 'add-reactive', component: AddReactiveComponent },


];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
