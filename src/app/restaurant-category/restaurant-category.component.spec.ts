import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCategoryComponent } from './restaurant-category.component';

describe('RestaurantCategoryComponent', () => {
  let component: RestaurantCategoryComponent;
  let fixture: ComponentFixture<RestaurantCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
