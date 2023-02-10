import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  selectedId: any;
  constructor() { }

  setId(id:any) {
    this.selectedId = id;
  }

  getId() {
    return this.selectedId;
  }
}
