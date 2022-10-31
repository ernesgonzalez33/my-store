import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Product;
  options: number[] = [];

  constructor() { 
    this.cartItem = {
      id: 1,
      name: '',
      price: 0,
      quantity: 0,
      description: ''
    }
  }

  ngOnInit(): void {
    this.options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  onClick(cartItem: Product){
    alert("Removed from cart");
  }

}
