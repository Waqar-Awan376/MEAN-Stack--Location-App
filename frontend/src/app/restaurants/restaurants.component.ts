import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  allRestaurants:any;
  areRestaurantsRendered:boolean=false;
  constructor(private http:HttpClient) { }

  ngOnInit():void {
    this.http.get('http://localhost:3000/restaurants/getRestaurants',{
      responseType:"json"
    }).subscribe((result)=>
    {
      this.allRestaurants=result;
      this.areRestaurantsRendered=true;
    });
  }

}
