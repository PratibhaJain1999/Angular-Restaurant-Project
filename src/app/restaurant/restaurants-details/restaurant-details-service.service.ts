import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailsServiceService {

  constructor(private http:HttpClient) { }

  restaurantsDetails(){
    return this.http.get(' https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails');
  }
}
