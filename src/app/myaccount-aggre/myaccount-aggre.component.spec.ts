import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountAggreComponent } from './myaccount-aggre.component';

describe('MyaccountAggreComponent', () => {
  let component: MyaccountAggreComponent;
  let fixture: ComponentFixture<MyaccountAggreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountAggreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountAggreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
