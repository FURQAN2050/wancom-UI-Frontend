import { TestBed } from '@angular/core/testing';

import { GetSubDealersService } from './get-sub-dealers.service';

describe('GetSubDealersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSubDealersService = TestBed.get(GetSubDealersService);
    expect(service).toBeTruthy();
  });
});
