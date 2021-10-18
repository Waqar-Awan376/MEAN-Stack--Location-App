import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  constructor(public appService:AppService,private router:Router) { }

  ngOnInit(): void {
    if(!this.appService.foundRestaurant)
    {
      this.router.navigate(['/']);
    }
  }

}
