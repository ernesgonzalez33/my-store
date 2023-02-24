import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title = 'Cart Items';
  shoppingCartProducts: Product[] = [];
  cost: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartProducts = this.shoppingCartService.getShoppingCartProducts();
    this.updateCartTotal();
  }

  updateCartTotal(): void {
    this.shoppingCartProducts.forEach(product => {
      this.cost = this.cost + (product.price * product.quantity);
    });
  }

}
