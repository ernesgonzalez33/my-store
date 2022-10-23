import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { StoreFrontModule } from './store-front/store-front.module';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreFrontModule,
    ShoppingCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
