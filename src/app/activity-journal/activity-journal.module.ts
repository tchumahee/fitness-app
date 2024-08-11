import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityJournalRoutingModule } from './activity-journal-routing.module';
import { ActivityJournalComponent } from './activity-journal/activity-journal.component';


@NgModule({
  declarations: [
    ActivityJournalComponent
  ],
  imports: [
    CommonModule,
    ActivityJournalRoutingModule
  ]
})
export class ActivityJournalModule { }
