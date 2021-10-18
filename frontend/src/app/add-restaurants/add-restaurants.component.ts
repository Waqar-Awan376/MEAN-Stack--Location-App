import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrls: ['./add-restaurants.component.css']
})
export class AddRestaurantsComponent implements OnInit {
  imageData:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  addRestaurantHandler(formData: NgForm) {
    const uploadData=new FormData();
    uploadData.append('name',formData.value['restaurantName']);
    uploadData.append('phoneNumber',formData.value['restaurantNumber']);
    uploadData.append('street',formData.value['restaurantStreet']);
    uploadData.append('city',formData.value['restaurantCity']);
    uploadData.append('state',formData.value['restaurantState']);
    uploadData.append('image',this.imageData);
    this.http.post('http://localhost:3000/restaurants/postRestaurant',uploadData).subscribe((responseData)=>{
      console.log(responseData);
    },error => {
      console.log(error);
    })
  }

  onFileUpload(event: any) {
    this.imageData=event.target.files[0];
    console.log(this.imageData);
  }
}
