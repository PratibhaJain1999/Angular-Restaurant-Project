import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { MenuService } from './menu.service';
import { RestaurantDetailsServiceService } from './restaurant-details-service.service';

@Component({
  selector: 'app-restaurants-details',
  templateUrl: './restaurants-details.component.html',
  styleUrls: ['./restaurants-details.component.css']
})
export class RestaurantsDetailsComponent implements OnInit,OnChanges {

  constructor(private menuService: MenuService, private detailsService: RestaurantDetailsServiceService, private restaurantServ: RestaurantService) { }
  menu: any = []
  restaurants: any = [];
  selectedId: any;
  @Input()selectedRestaurantId:any;
  selectedRestDetails:any;

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(responsiveData => {
      this.menu = responsiveData;
    })
    this.detailsService.restaurantsDetails().subscribe(responsiveDetails => {
      this.restaurants = responsiveDetails;
      this.selectedRestDetails = this.restaurants.restaurantDetails.filter((x:any) => x.id == this.selectedRestaurantId)
      console.log(this.selectedRestDetails);
    })
    
  }

  ngOnChanges(changes:SimpleChanges) {
    if(changes['selectedRestaurantId'] && changes['selectedRestaurantId'].currentValue) {
      this.selectedRestDetails = this.restaurants.restaurantDetails.filter((x:any) => x.id == changes['selectedRestaurantId'].currentValue);
    }
  }
}
