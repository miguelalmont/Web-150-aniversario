import { TestBed } from '@angular/core/testing';

import { AmbientesPJ.ServiceService } from './ambientes-pj.service.service';

describe('AmbientesPJ.ServiceService', () => {
  let service: AmbientesPJ.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbientesPJ.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
