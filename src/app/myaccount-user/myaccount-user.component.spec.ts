import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountUserComponent } from './myaccount-user.component';

describe('MyaccountUserComponent', () => {
  let component: MyaccountUserComponent;
  let fixture: ComponentFixture<MyaccountUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
