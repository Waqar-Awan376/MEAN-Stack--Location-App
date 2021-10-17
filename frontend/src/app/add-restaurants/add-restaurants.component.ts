import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrls: ['./add-restaurants.component.css']
})
export class AddRestaurantsComponent implements OnInit {
  imageData:any;
  constructor() { }

  ngOnInit(): void {
  }

  addRestaurantHandler(formData: NgForm) {
    console.log(formData);
  }

  onFileUpload(event: any) {
    this.imageData=event.target.files[0];
  }
}
