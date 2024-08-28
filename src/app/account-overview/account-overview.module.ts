import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountOverviewRoutingModule } from './account-overview-routing.module';
import { AccountOverviewComponent } from './account-overview/account-overview.component';


@NgModule({
  declarations: [
    AccountOverviewComponent
  ],
  imports: [
    CommonModule,
    AccountOverviewRoutingModule
  ]
})
export class AccountOverviewModule { }
