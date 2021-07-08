import { TestBed } from '@angular/core/testing';

import { NominatedCandidateService } from './nominated-candidate.service';

describe('NominatedCandidateService', () => {
  let service: NominatedCandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NominatedCandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
