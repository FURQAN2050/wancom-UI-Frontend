import { TestBed } from '@angular/core/testing';

import { CreateAndUpdateSubDealersService } from './create-and-update-sub-dealers.service';

describe('CreateAndUpdateSubDealersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateAndUpdateSubDealersService = TestBed.get(CreateAndUpdateSubDealersService);
    expect(service).toBeTruthy();
  });
});
