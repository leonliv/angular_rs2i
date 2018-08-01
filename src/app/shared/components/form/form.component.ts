import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../interfaces/item';
import { State } from '../../enums/state.enum';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public newItem: Item;
  public states = Object.values(State);
  @Output() nItem: EventEmitter<Item> = new EventEmitter();
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.newItem = {
      id: '',
      name: '',
      reference: '',
      state: State.ALIVRER,
      deliveryDate: '',
    };
  }

  public process() {
    console.log(this.newItem);
    this.nItem.emit(this.newItem);
    this.init(); // Pour réinitialiser un objet

  }

}
