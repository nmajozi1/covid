import { TestBed } from '@angular/core/testing';

import { ProvincialServiceService } from './provincial-service.service';

describe('ProvincialServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProvincialServiceService = TestBed.get(ProvincialServiceService);
    expect(service).toBeTruthy();
  });
});
