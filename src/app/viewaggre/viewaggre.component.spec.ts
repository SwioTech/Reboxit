import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaggreComponent } from './viewaggre.component';

describe('ViewaggreComponent', () => {
  let component: ViewaggreComponent;
  let fixture: ComponentFixture<ViewaggreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaggreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaggreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
