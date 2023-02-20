import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ProductListComponent, ProductComponent, ProductViewComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductListComponent, ProductComponent],
})
export class StoreFrontModule {}
