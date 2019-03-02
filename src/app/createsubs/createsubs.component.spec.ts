import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesubsComponent } from './createsubs.component';

describe('CreatesubsComponent', () => {
  let component: CreatesubsComponent;
  let fixture: ComponentFixture<CreatesubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
