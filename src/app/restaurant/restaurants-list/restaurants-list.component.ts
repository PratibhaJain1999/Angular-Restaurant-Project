import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { RestaurantsListService } from './restaurants-list.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {

  restaurants:any = [];
@Output() selectedID = new EventEmitter();
  constructor(private restService: RestaurantsListService, private restaurantServ : RestaurantService) { }

  ngOnInit(): void {
    this.restService.getRestaurantsList().subscribe(responsiveData=>{
      this.restaurants = responsiveData;
    })
  }

  selectRestaurant(id:any) {
    this.selectedID.emit(id);
  }

}
