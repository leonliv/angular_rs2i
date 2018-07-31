import { Item } from '../shared/interfaces/item';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 'fkfds',
    name: 'Leon',
    reference: '1234',
    deliveryDate: '2018-07-28T22:00:00.000Z',
    state: State.ALIVRER
  },
  {
    id: 'hjhjh',
    name: 'Yuzhu',
    reference: '2364',
    deliveryDate: '2018-07-29T22:00:00.000Z',
    state: State.ENCOURS
  },
  {
    id: 'fdsqg',
    name: 'Dominik',
    reference: '3621',
    deliveryDate: '2018-07-30T22:00:00.000Z',
    state: State.LIVREE
  },
];
