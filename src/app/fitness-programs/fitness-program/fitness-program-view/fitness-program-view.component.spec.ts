import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessProgramViewComponent } from './fitness-program-view.component';

describe('FitnessProgramViewComponent', () => {
  let component: FitnessProgramViewComponent;
  let fixture: ComponentFixture<FitnessProgramViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FitnessProgramViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FitnessProgramViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
