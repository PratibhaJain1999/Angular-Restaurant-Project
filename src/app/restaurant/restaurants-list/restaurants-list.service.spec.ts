import { TestBed } from '@angular/core/testing';

import { RestaurantsListService } from './restaurants-list.service';

describe('RestaurantsListService', () => {
  let service: RestaurantsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
