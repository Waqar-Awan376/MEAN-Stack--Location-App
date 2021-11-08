import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Router} from '@angular/router'
import {AppService} from "../app.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  allRestaurants:any;
  areRestaurantsRendered:boolean=false;
  constructor(private http:HttpClient,private appService:AppService,private router:Router) { }

  ngOnInit():void {
    this.http.get('http://localhost:3000/restaurants/getRestaurants',{
      responseType:"json"
    }).subscribe((result)=>
    {
      this.allRestaurants=result;
      this.areRestaurantsRendered=true;
    });
  }

  showDetail(formData: NgForm) {
    this.appService.foundRestaurant=this.allRestaurants['allRestaurants'].find((element:any)=>element['_id']===formData.value['restaurant-id']);
    this.router.navigate(['restaurantDetail']);
  }

  updateRestaurant(formData: NgForm) {
    this.appService.foundRestaurant=this.allRestaurants['allRestaurants'].find((element:any)=>element['_id']===formData.value['restaurant-id']);
    this.router.navigate(['updateRestaurant']);
  }

  deleteRestaurant(formData: NgForm) {
    this.http.get('http://localhost:3000/restaurants/deleteRestaurant/'+formData.value['restaurant-id']).subscribe((result)=>{
      this.ngOnInit();
      this.router.navigate(['restaurantList']);
    })

  }
}
