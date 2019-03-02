import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountRecComponent } from './myaccount-rec.component';

describe('MyaccountRecComponent', () => {
  let component: MyaccountRecComponent;
  let fixture: ComponentFixture<MyaccountRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
