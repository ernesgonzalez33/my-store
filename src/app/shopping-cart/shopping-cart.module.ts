import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { StoreFrontModule } from '../store-front/store-front.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, StoreFrontModule],
})
export class ShoppingCartModule {}
