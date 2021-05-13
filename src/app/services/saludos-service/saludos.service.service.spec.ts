import { TestBed } from '@angular/core/testing';

import { Saludos.ServiceService } from './saludos.service.service';

describe('Saludos.ServiceService', () => {
  let service: Saludos.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Saludos.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
