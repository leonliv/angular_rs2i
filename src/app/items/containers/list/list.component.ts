import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends AbstractComponent implements OnInit {
 // public collection: Item[];
  constructor(
    collectionService: CollectionService
  ) {
    super(collectionService);
    super.ngOnInit();

  }

  ngOnInit() {
    console.log('surcharge');
  }

  public add(item: Item): void {
    console.log(item);
    this.collectionService.add(item);
  }

}
