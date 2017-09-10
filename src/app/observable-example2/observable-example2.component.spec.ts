import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableExample2Component } from './observable-example2.component';

describe('ObservableExample2Component', () => {
  let component: ObservableExample2Component;
  let fixture: ComponentFixture<ObservableExample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableExample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
