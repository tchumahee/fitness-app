import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProgramsViewComponent } from './user-programs-view/user-programs-view.component';

const routes: Routes = [
  {
    path: '',
    component: UserProgramsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProgramsRoutingModule { }
