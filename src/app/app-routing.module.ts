import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    // canActivate: [GuardService]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: 'fitness-programs', // 'fitness-programs/:id'
    loadChildren: () => import('./fitness-programs/fitness-programs.module').then(mod => mod.FitnessProgramsModule),
    // canActivate: [GuardService]
  },
  {
    path: 'my-activity-journal',
    loadChildren: () => import('./activity-journal/activity-journal.module').then(mod => mod.ActivityJournalModule),
    // canActivate: [GuardService]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
