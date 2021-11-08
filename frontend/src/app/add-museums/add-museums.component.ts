import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-places',
  templateUrl: './add-museums.component.html',
  styleUrls: ['./add-museums.component.css']
})
export class AddMuseumsComponent implements OnInit {
  imageData:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  addPlaceHandler(formData: NgForm) {
    const uploadData=new FormData();
    uploadData.append('name',formData.value['placeName']);
    uploadData.append('phoneNumber',formData.value['placeNumber']);
    uploadData.append('street',formData.value['placeStreet']);
    uploadData.append('city',formData.value['placeCity']);
    uploadData.append('state',formData.value['placeState']);
    uploadData.append('zipCode',formData.value['placeZip']);
    uploadData.append('image',this.imageData);
    this.http.post('http://localhost:3000/places/postPlace',uploadData).subscribe((responseData)=>{
      console.log(responseData);
      formData.reset();
    },error => {
      console.log(error);
    })
  }

  onFileUpload(event: any) {
    this.imageData=event.target.files[0];
  }
}
