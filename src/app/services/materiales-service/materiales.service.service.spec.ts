import { TestBed } from '@angular/core/testing';

import { Materiales.ServiceService } from './materiales.service.service';

describe('Materiales.ServiceService', () => {
  let service: Materiales.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Materiales.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
