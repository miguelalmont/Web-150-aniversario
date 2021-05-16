import { TestBed } from '@angular/core/testing';

import { Oracion.ServiceService } from './oracion.service.service';

describe('Oracion.ServiceService', () => {
  let service: Oracion.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Oracion.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
