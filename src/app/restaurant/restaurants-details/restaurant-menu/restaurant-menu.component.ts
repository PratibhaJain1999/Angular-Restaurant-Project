import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {

  // @Output()menuSelected=new EventEmitter
  @Input()itemName: any;
  @Input()itemPhoto:any;
  @Input()itemPrice:any;
  constructor() { }

  ngOnInit(): void {
  }
 


}
