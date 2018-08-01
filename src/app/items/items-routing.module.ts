import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './containers/list/list.component';
import { LivresComponent } from './containers/livres/livres.component';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
   pathMatch: 'full'
},

  { path: 'list', component: ListComponent },
  { path: 'livrees', component: LivresComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
