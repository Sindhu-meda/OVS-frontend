import { TestBed } from '@angular/core/testing';

import { RegisteredsocietyvotersService } from './registeredsocietyvoters.service';

describe('RegisteredsocietyvotersService', () => {
  let service: RegisteredsocietyvotersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisteredsocietyvotersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
