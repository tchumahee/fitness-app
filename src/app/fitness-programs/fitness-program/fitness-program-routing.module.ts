import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitnessProgramViewComponent } from './fitness-program-view/fitness-program-view.component';

const routes: Routes = [
  {
    path: '',
    component: FitnessProgramViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitnessProgramRoutingModule { }
