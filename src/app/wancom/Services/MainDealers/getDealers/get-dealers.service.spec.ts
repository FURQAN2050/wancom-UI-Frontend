import { TestBed } from '@angular/core/testing';

import { GetDealersService } from './get-dealers.service';

describe('GetDealersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDealersService = TestBed.get(GetDealersService);
    expect(service).toBeTruthy();
  });
});
