import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableExample1Component } from './observable-example-1.component';

describe('ObservableExample1Component', () => {
  let component: ObservableExample1Component;
  let fixture: ComponentFixture<ObservableExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
