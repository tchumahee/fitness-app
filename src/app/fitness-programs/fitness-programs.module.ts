import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessProgramsRoutingModule } from './fitness-programs-routing.module';
import { FitnessProgramsPageComponent } from './fitness-programs-page/fitness-programs-page.component';
import { ProgramCardComponent } from './program-card/program-card.component';


@NgModule({
  declarations: [
    FitnessProgramsPageComponent,
    ProgramCardComponent
  ],
  imports: [
    CommonModule,
    FitnessProgramsRoutingModule
  ],
  exports: [
    ProgramCardComponent
  ]
})
export class FitnessProgramsModule { }
