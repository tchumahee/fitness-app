import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityJournalRoutingModule } from './activity-journal-routing.module';
import { ActivityJournalComponent } from './activity-journal/activity-journal.component';
import { ActivityEntryComponent } from './activity-entry/activity-entry.component';


@NgModule({
  declarations: [
    ActivityJournalComponent,
    ActivityEntryComponent
  ],
  imports: [
    CommonModule,
    ActivityJournalRoutingModule
  ]
})
export class ActivityJournalModule { }
