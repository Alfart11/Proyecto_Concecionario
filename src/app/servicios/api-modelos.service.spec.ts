import { TestBed } from '@angular/core/testing';

import { ApiModelosService } from './api-modelos.service';

describe('ApiModelosService', () => {
  let service: ApiModelosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiModelosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
