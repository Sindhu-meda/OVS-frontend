import { TestBed } from '@angular/core/testing';

import { RegisteredsocietyvotersServiceService } from './registeredsocietyvoters-service.service';

describe('RegisteredsocietyvotersServiceService', () => {
  let service: RegisteredsocietyvotersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisteredsocietyvotersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
