import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title = 'Product List';
  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'The Legend of Zelda: Breath of the Wild',
        price: 70,
      },
      {
        id: 2,
        name: 'Fire Emblem: Three Houses',
        price: 60,
      },
      {
        id: 3,
        name: 'Super Mario Odyssey',
        price: 60,
      },
    ];
  }
}
