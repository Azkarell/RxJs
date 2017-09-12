import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedObservableExampleComponent } from './shared-observable-example.component';

describe('SharedObservableExampleComponent', () => {
  let component: SharedObservableExampleComponent;
  let fixture: ComponentFixture<SharedObservableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedObservableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedObservableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
