import { TestBed } from '@angular/core/testing';

import { RestaurantDetailsServiceService } from './restaurant-details-service.service';

describe('RestaurantDetailsServiceService', () => {
  let service: RestaurantDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
