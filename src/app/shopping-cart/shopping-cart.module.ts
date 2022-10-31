import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { StoreFrontModule } from '../store-front/store-front.module';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [CommonModule, StoreFrontModule],
})
export class ShoppingCartModule {}
