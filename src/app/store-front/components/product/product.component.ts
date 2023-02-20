import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductViewService } from '../../services/product-view.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  options: number[] = [];

  constructor(private shoppingCartService: ShoppingCartService, private productViewService: ProductViewService) {
    this.product = {
      id: 1,
      name: '',
      price: 0,
      quantity: 0,
      description: ''
    };
  }

  ngOnInit(): void {
    this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  onClick(value:string, product: Product){
    this.product.quantity = +value;
    alert("You have added " + product.quantity + " " + product.name + " to the shopping cart");
    this.shoppingCartService.addToShoppingCart(product);
  }

  onClickImg(product: Product){
    this.productViewService.setProduct(product)
  }
}
