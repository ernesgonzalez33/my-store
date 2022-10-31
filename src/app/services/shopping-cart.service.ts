import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCartList: Product[];

  constructor() {
    this.shoppingCartList = [];
  }

  getShoppingCartProducts(){
    return this.shoppingCartList;
  }

  addToShoppingCart(product: Product){
    this.shoppingCartList.push(product);
    return this.shoppingCartList;
  }

  clearShoppingCart(){
    this.shoppingCartList = [];
    return this.shoppingCartList;
  }
}
