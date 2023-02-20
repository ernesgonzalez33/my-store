import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductViewService {

  product: Product;

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      quantity: 0,
      description: ''
    };
  }

  getProduct(): Product {
    return this.product;
  }

  setProduct(product: Product) {
    this.product = product;
  }
}
