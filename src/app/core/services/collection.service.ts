import { Injectable } from '@angular/core';
import { COLLECTION } from '../collection';
import { Item } from '../../shared/interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private _collection: Item[];
  constructor() {
    this.collection = COLLECTION;
  }

  /**
   * get collection
   */
  get collection(): Item[] {
    return this._collection;
  }


  /**
   * set collection
   */
  set collection(col: Item[]) {
    this._collection = col;
  }


  /**
   * get 1 item from collection
   */

  /**
   * add item in collection
   */

  /**
   * update item in collection
   */
  public update(item: Item): void {

  }

  /**
   * delete item in collection
   */
}
