import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUsersSidebarComponent } from './chat-users-sidebar.component';

describe('ChatUsersSidebarComponent', () => {
  let component: ChatUsersSidebarComponent;
  let fixture: ComponentFixture<ChatUsersSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatUsersSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatUsersSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
