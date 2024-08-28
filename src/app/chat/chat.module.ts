import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatUsersSidebarComponent } from './chat-users-sidebar/chat-users-sidebar.component';


@NgModule({
  declarations: [
    ChatViewComponent,
    ChatUsersSidebarComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
