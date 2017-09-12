import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsnextComponent } from './whatsnext.component';

describe('WhatsnextComponent', () => {
  let component: WhatsnextComponent;
  let fixture: ComponentFixture<WhatsnextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsnextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsnextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
