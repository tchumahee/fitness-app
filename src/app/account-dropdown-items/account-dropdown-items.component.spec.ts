import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDropdownItemsComponent } from './account-dropdown-items.component';

describe('AccountDropdownItemsComponent', () => {
  let component: AccountDropdownItemsComponent;
  let fixture: ComponentFixture<AccountDropdownItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountDropdownItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountDropdownItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
