import { TestBed } from '@angular/core/testing';

import { GetAllPackagesService } from './get-all-packages.service';

describe('GetAllPackagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllPackagesService = TestBed.get(GetAllPackagesService);
    expect(service).toBeTruthy();
  });
});
