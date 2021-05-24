import { TestBed } from '@angular/core/testing';

import { AmbientesPJService } from './ambientes-pj.service.service';

describe('AmbientesPJ.ServiceService', () => {
  let service: AmbientesPJService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbientesPJService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
