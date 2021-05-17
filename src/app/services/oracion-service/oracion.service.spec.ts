import { TestBed } from '@angular/core/testing';

import { OracionService } from './oracion.service';

describe('Oracion.ServiceService', () => {
  let service: OracionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
