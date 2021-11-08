import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-place-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  constructor(public appService:AppService,private router:Router) { }

  ngOnInit(): void {
    if(!this.appService.foundPlace)
    {
      this.router.navigate(['/']);
    }
  }

}
