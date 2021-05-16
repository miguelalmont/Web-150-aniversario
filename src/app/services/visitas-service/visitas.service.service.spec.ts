import { TestBed } from '@angular/core/testing';

import { Visitas.ServiceService } from './visitas.service.service';

describe('Visitas.ServiceService', () => {
  let service: Visitas.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Visitas.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
