import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotedtoaggreComponent } from './allotedtoaggre.component';

describe('AllotedtoaggreComponent', () => {
  let component: AllotedtoaggreComponent;
  let fixture: ComponentFixture<AllotedtoaggreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotedtoaggreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotedtoaggreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
