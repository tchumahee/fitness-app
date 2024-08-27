import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDropdownItemsComponent } from './category-dropdown-items.component';

describe('CategoryDropdownItemsComponent', () => {
  let component: CategoryDropdownItemsComponent;
  let fixture: ComponentFixture<CategoryDropdownItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryDropdownItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryDropdownItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
