import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  options: number[] = [];

  constructor() {
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

  onClick(value:string){
    this.product.quantity = +value;
    console.log("You have selected " + value)
  }
}
