import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  constructor(public appService:AppService,private router:Router) { }

  ngOnInit(): void {
    if(!this.appService.foundPlace)
    {
      this.router.navigate(['/']);
    }
  }

}
