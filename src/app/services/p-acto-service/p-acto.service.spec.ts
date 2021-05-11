import { TestBed } from '@angular/core/testing';

import { PActoService } from './p-acto.service';

describe('PActoService', () => {
  let service: PActoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PActoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
