import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterByStatePipe } from './pipes/filter-by-state.pipe';
import { StateDirective } from './directives/state.directive';
import { RemoveAccentPipe } from './pipes/remove-accent.pipe';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// external librairies
import { IconsModule } from '../icons/icons.module';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    IconsModule,
    ReactiveFormsModule
  ],
  declarations: [NavComponent, ItemComponent, CapitalizePipe, FilterByStatePipe, StateDirective, RemoveAccentPipe,
    FormComponent, FormReactiveComponent],
  exports: [NavComponent, ItemComponent, FilterByStatePipe, FormComponent, FormReactiveComponent]
})
export class SharedModule { }
