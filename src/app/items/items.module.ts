import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './containers/list/list.component';
import { AbstractComponent } from './containers/abstract/abstract.component';
import { LivresComponent } from './containers/livres/livres.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListComponent, LivresComponent, AbstractComponent],
  exports: [ListComponent, LivresComponent]
})
export class ItemsModule { }
