import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  fetchedRestaurantData:any;
  isDataFetched:boolean=false;

  constructor(public appService:AppService,private http:HttpClient,private route:ActivatedRoute,private router:Router) { }
  imageData:any;
  ngOnInit(): void {
    console.log(this.appService.foundRestaurant);
    if(!this.appService.foundRestaurant)
    {
      this.router.navigate(['/']);
    }
  }

  updateRestaurant(formData: NgForm) {
    const uploadData=new FormData();
    uploadData.append('name',formData.value['restaurantName']);
    uploadData.append('phoneNumber',formData.value['restaurantNumber']);
    uploadData.append('street',formData.value['restaurantStreet']);
    uploadData.append('city',formData.value['restaurantCity']);
    uploadData.append('state',formData.value['restaurantState']);
    uploadData.append('image',this.imageData);
    this.http.post('http://localhost:3000/restaurants/updateRestaurant/'+this.appService.foundRestaurant._id,uploadData).subscribe((result)=>{
      this.router.navigate(['/restaurantList']);
    })
  }

  onFileUpload(event: any) {
    this.imageData=event.target.files[0];
  }
}
