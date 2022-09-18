import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    CartComponent,
    CartItemComponent,
    NavBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class StoreFrontModule { }
