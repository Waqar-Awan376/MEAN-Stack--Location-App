import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  allRestaurants:any;
  constructor(private http:HttpClient) { }

  ngOnInit():any {
    return this.http.get('http://localhost:3000/restaurants/getRestaurants',{
      responseType:"json"
    }).subscribe((result)=>
    {
      console.log(result);
      this.allRestaurants=result;
    });
  }

}
