import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-places',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.css']
})
export class MuseumsComponent implements OnInit {
  allPlaces:any;
  arePlacesRendered:boolean=false;

  constructor(private http:HttpClient,public appService:AppService,private router:Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/places/getPlaces',{
      responseType:"json"
    }).subscribe((result)=>
    {
      this.allPlaces=result;
      console.log(this.allPlaces);
      this.arePlacesRendered=true;
    });
  }

  showDetail(formData: NgForm) {
    this.appService.foundPlace=this.allPlaces['allPlaces'].find((element:any)=>element['_id']===formData.value['place-id']);
    this.router.navigate(['museumDetail']);
  }

  updateMuseum(formData: NgForm) {
    this.appService.foundPlace=this.allPlaces['allPlaces'].find((element:any)=>element['_id']===formData.value['place-id']);
    this.router.navigate(['updateMuseum']);
  }

  deleteMuseum(formData: NgForm) {
    this.http.get('http://localhost:3000/places/deletePlace/'+formData.value['place-id']).subscribe((result)=>{
      this.ngOnInit();
      this.router.navigate(['museumList']);
    })
  }
}
