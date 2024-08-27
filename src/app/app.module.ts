import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { CategoryDropdownItemsComponent } from './category-dropdown-items/category-dropdown-items.component';
import { AccountDropdownItemsComponent } from './account-dropdown-items/account-dropdown-items.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownMenuComponent,
    CategoryDropdownItemsComponent,
    AccountDropdownItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
