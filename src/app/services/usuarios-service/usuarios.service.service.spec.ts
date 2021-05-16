import { TestBed } from '@angular/core/testing';

import { Usuarios.ServiceService } from './usuarios.service.service';

describe('Usuarios.ServiceService', () => {
  let service: Usuarios.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Usuarios.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
