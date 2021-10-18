import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  allPlaces:any;
  arePlacesRendered:boolean=false;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/places/getPlaces',{
      responseType:"json"
    }).subscribe((result)=>
    {
      this.allPlaces=result;
      this.arePlacesRendered=true;
    });
  }

}
