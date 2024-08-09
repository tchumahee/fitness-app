import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesFeedComponent } from './exercises-feed.component';

describe('ExercisesFeedComponent', () => {
  let component: ExercisesFeedComponent;
  let fixture: ComponentFixture<ExercisesFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExercisesFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExercisesFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
