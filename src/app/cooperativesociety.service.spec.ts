import { TestBed } from '@angular/core/testing';

import { CooperativesocietyService } from './cooperativesociety.service';

describe('CooperativesocietyService', () => {
  let service: CooperativesocietyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooperativesocietyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
