import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './shopping-cart/components/cart/cart.component';
import { SuccessComponent } from './shopping-cart/components/success/success.component';
import { ProductListComponent } from './store-front/components/product-list/product-list.component';
import { ProductViewComponent } from './store-front/components/product-view/product-view.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductViewComponent },
  { path: 'success', component: SuccessComponent },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
