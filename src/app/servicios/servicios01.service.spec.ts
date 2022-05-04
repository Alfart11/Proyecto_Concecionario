import { TestBed } from '@angular/core/testing';

import { Servicios01Service } from './servicios01.service';

describe('Servicios01Service', () => {
  let service: Servicios01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicios01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
