import { TestBed, inject } from '@angular/core/testing';

import { RedcapService } from './redcap.service';

describe('RedcapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedcapService]
    });
  });

  it('should be created', inject([RedcapService], (service: RedcapService) => {
    expect(service).toBeTruthy();
  }));
});
