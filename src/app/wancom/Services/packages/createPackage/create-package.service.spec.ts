import { TestBed } from '@angular/core/testing';

import { CreatePackageService } from './create-package.service';

describe('CreatePackageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatePackageService = TestBed.get(CreatePackageService);
    expect(service).toBeTruthy();
  });
});
