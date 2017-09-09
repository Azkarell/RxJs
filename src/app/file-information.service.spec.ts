import { TestBed, inject } from '@angular/core/testing';

import { FileInformationService } from './file-information.service';

describe('FileInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileInformationService]
    });
  });

  it('should be created', inject([FileInformationService], (service: FileInformationService) => {
    expect(service).toBeTruthy();
  }));
});
