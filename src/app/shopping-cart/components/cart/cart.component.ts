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

  changeCartItemQuantity(cartItem: Product){
    if (cartItem.quantity <= 0){
      cartItem.quantity = 0;
      this.removeItem(cartItem);
    }
    this.updateCartTotal();
  }

  removeItem(cartItem: Product) {
    this.shoppingCartProducts.forEach((item, index)=>{
      if (item == cartItem) this.shoppingCartProducts.splice(index,1);
    });
    this.updateCartTotal();  
    alert("You have removed " + cartItem.name + " from the shopping cart");
  }

  updateCartTotal(): void {
    this.cost = 0;
    this.shoppingCartProducts.forEach(product => {
      this.cost = this.cost + (product.price * product.quantity);
    });
  }

  cleanProducts(): void {
    this.shoppingCartProducts = [];
    this.updateCartTotal();
  }

}
