import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { StoreFrontModule } from '../store-front/store-front.module';
import { FormsModule } from '@angular/forms';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';

@NgModule({
  declarations: [CartComponent, CartItemComponent, CheckoutFormComponent],
  imports: [CommonModule, StoreFrontModule, FormsModule],
})
export class ShoppingCartModule {}
