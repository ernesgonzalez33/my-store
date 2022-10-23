import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title = 'Product List';
  products: Product[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.products = this.itemService.getItems();
  }
}
