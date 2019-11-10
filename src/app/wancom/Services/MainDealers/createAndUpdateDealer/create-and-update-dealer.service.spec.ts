import { TestBed } from '@angular/core/testing';

import { CreateAndUpdateDealerService } from './create-and-update-dealer.service';

describe('CreateAndUpdateDealerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateAndUpdateDealerService = TestBed.get(CreateAndUpdateDealerService);
    expect(service).toBeTruthy();
  });
});
