import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { CategoryDropdownItemsComponent } from './category-dropdown-items/category-dropdown-items.component';
import { AccountDropdownItemsComponent } from './account-dropdown-items/account-dropdown-items.component';
import { PaymentHistoryComponent } from './payment-history/payment-history/payment-history.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownMenuComponent,
    CategoryDropdownItemsComponent,
    AccountDropdownItemsComponent,
    PaymentHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
