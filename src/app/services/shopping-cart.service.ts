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

  getShoppingCartProducts() {
    return this.shoppingCartList;
  }

  addToShoppingCart(product: Product) {

    var duplicated: boolean = false;

    for (let index = 0; index < this.shoppingCartList.length; index++) {
      
      if (this.shoppingCartList[index].id == product.id){
        duplicated = true;
      }
      
    }

    if (duplicated) {
      alert("This product is already in the cart. Kindly change the quantity directly from there")
    } else {
      alert("You have added " + product.quantity + " " + product.name + " to the shopping cart");
      this.shoppingCartList.push(product);
    }
    return this.shoppingCartList;
  }

  clearShoppingCart() {
    this.shoppingCartList = [];
    return this.shoppingCartList;
  }
}
