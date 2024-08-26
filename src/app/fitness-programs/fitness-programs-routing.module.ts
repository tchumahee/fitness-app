import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitnessProgramsPageComponent } from './fitness-programs-page/fitness-programs-page.component';

const routes: Routes = [
  {
    path: '',
    component: FitnessProgramsPageComponent,
    // canActivate: [GuardService]
  },
  {
    path: 'fitness-program', // id = ...
    loadChildren: () => import('./fitness-program/fitness-program.module').then(mod => mod.FitnessProgramModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitnessProgramsRoutingModule { }
