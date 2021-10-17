import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-places',
  templateUrl: './add-places.component.html',
  styleUrls: ['./add-places.component.css']
})
export class AddPlacesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addPlaceHandler(formData: NgForm) {
    console.log(formData);
  }
}
