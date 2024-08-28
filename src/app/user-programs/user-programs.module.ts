import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProgramsRoutingModule } from './user-programs-routing.module';
import { UserProgramsViewComponent } from './user-programs-view/user-programs-view.component';
import { ProgramCardComponent } from '../fitness-programs/program-card/program-card.component';


@NgModule({
  declarations: [
    UserProgramsViewComponent,
    ProgramCardComponent
  ],
  imports: [
    CommonModule,
    UserProgramsRoutingModule
  ]
})
export class UserProgramsModule { }
