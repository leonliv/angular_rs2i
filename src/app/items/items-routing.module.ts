import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './containers/add/add.component';
import { ListComponent } from './containers/list/list.component';
import { LivresComponent } from './containers/livres/livres.component';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
   pathMatch: 'full'
},

  { path: 'list', component: ListComponent },
  { path: 'livrees', component: LivresComponent },
  { path: 'add', component: AddComponent },


];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
