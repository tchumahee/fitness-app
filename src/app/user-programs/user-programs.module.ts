import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProgramsRoutingModule } from './user-programs-routing.module';
import { UserProgramsViewComponent } from './user-programs-view/user-programs-view.component';
import { FitnessProgramsModule } from '../fitness-programs/fitness-programs.module';


@NgModule({
  declarations: [
    UserProgramsViewComponent,
  ],
  imports: [
    CommonModule,
    UserProgramsRoutingModule,
    FitnessProgramsModule
  ]
})
export class UserProgramsModule { }
