import { TestBed } from '@angular/core/testing';

import { ApiSevicesService } from './api-sevices.service';

describe('ApiSevicesService', () => {
  let service: ApiSevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
