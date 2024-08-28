import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProgramsViewComponent } from './user-programs-view.component';

describe('UserProgramsViewComponent', () => {
  let component: UserProgramsViewComponent;
  let fixture: ComponentFixture<UserProgramsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProgramsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProgramsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
