import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AppService} from "../app.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-museum',
  templateUrl: './update-museum.component.html',
  styleUrls: ['./update-museum.component.css']
})
export class UpdateMuseumComponent implements OnInit {
  imageData:any;
  constructor(public appService:AppService,private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log(this.appService.foundPlace);
    if(!this.appService.foundPlace)
    {
      this.router.navigate(['/']);
    }
  }

  onFileUpload(event: any) {
    this.imageData=event.target.files[0];
  }

  updateMuseumHandler(formData: NgForm) {
    const uploadData=new FormData();
    uploadData.append('name',formData.value['placeName']);
    uploadData.append('phoneNumber',formData.value['placeNumber']);
    uploadData.append('street',formData.value['placeStreet']);
    uploadData.append('city',formData.value['placeCity']);
    uploadData.append('state',formData.value['placeState']);
    uploadData.append('zipCode',formData.value['placeZip']);
    uploadData.append('image',this.imageData);
    this.http.post('http://localhost:3000/places/updatePlace/'+this.appService.foundPlace._id,uploadData).subscribe((result)=>{
      this.router.navigate(['/museumList']);
    })
  }
}
