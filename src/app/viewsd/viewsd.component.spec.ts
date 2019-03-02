import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsdComponent } from './viewsd.component';

describe('ViewsdComponent', () => {
  let component: ViewsdComponent;
  let fixture: ComponentFixture<ViewsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
