import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrecComponent } from './viewrec.component';

describe('ViewrecComponent', () => {
  let component: ViewrecComponent;
  let fixture: ComponentFixture<ViewrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
