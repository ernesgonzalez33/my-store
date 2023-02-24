import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Product;

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
