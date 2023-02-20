import { Component, OnInit } from '@angular/core';
import { ProductViewService } from '../../services/product-view.service';
import { Product } from 'src/app/models/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: Product;
  options: number[] = [];

  constructor(private productViewService: ProductViewService, private shoppingCartService: ShoppingCartService) { 
    this.product = {
      id: 0,
      name: '',
      price: 0,
      quantity: 0,
      description: ''
    };
    this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  onClick(value:string, product: Product){
    this.product.quantity = +value;
    alert("You have added " + product.quantity + " " + product.name + " to the shopping cart");
    this.shoppingCartService.addToShoppingCart(product);
  }

  ngOnInit(): void {
    this.product = this.productViewService.getProduct();
  }

}
