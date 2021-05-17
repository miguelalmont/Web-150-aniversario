import { TestBed } from '@angular/core/testing';

import { MaterialesService } from './materiales.service';

describe('Materiales.ServiceService', () => {
  let service: MaterialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
