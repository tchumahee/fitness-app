import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessProgramRoutingModule } from './fitness-program-routing.module';
import { FitnessProgramViewComponent } from './fitness-program-view/fitness-program-view.component';


@NgModule({
  declarations: [
    FitnessProgramViewComponent
  ],
  imports: [
    CommonModule,
    FitnessProgramRoutingModule
  ]
})
export class FitnessProgramModule { }
