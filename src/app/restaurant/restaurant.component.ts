import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  selectedRestaurantId:any;
  constructor() { }

  ngOnInit(): void {
  }

  selectedRestId(id:any) {
    this.selectedRestaurantId = id;
  }

}
