import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Product;
  @Output() changed = new EventEmitter;

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
  }

  onClick(cartItem: Product) {
    alert("Removed from cart");
  }

}
