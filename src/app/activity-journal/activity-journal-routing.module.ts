import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityJournalComponent } from './activity-journal/activity-journal.component';

const routes: Routes = [
  {
    path: '',
    component: ActivityJournalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityJournalRoutingModule { }
