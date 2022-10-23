import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  getItems() {
    return [
      {
        id: 1,
        name: 'The Legend of Zelda: Breath of the Wild',
        price: 70,
        quantity: 0,
      },
      {
        id: 2,
        name: 'Fire Emblem: Three Houses',
        price: 60,
        quantity: 0,
      },
      {
        id: 3,
        name: 'Super Mario Odyssey',
        price: 60,
        quantity: 0,
      },
    ];
  }
}
