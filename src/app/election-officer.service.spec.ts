import { TestBed } from '@angular/core/testing';

import { ElectionOfficerService } from './election-officer.service';

describe('ElectionOfficerService', () => {
  let service: ElectionOfficerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectionOfficerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
