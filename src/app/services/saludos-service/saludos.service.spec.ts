import { TestBed } from '@angular/core/testing';

import { SaludosService } from './saludos.service';

describe('Saludos.ServiceService', () => {
  let service: SaludosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaludosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
