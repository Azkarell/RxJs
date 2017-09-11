import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservabledefinitionComponent } from './observabledefinition.component';

describe('ObservabledefinitionComponent', () => {
  let component: ObservabledefinitionComponent;
  let fixture: ComponentFixture<ObservabledefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservabledefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservabledefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
