import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantsListComponent } from './restaurant/restaurants-list/restaurants-list.component';
import { RestaurantsDetailsComponent } from './restaurant/restaurants-details/restaurants-details.component';
import { RestaurantCategoryComponent } from './restaurant-category/restaurant-category.component';
import { RestaurantMenuComponent } from './restaurant/restaurants-details/restaurant-menu/restaurant-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    DashboardNavbarComponent,
    RestaurantComponent,
    RestaurantsListComponent,
    RestaurantsDetailsComponent,
    RestaurantCategoryComponent,
    RestaurantMenuComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
