import { TestBed, inject } from '@angular/core/testing';

import { EventRouterService } from './event-router.service';

describe('EventRouterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventRouterService]
    });
  });

  it('should be created', inject([EventRouterService], (service: EventRouterService) => {
    expect(service).toBeTruthy();
  }));
});
