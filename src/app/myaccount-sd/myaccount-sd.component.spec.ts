import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountSdComponent } from './myaccount-sd.component';

describe('MyaccountSdComponent', () => {
  let component: MyaccountSdComponent;
  let fixture: ComponentFixture<MyaccountSdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountSdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountSdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
