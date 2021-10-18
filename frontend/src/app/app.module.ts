import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AddRestaurantsComponent } from './add-restaurants/add-restaurants.component';
import { PlacesComponent } from './places/places.component';
import { AddPlacesComponent } from './add-places/add-places.component';
import {HttpClientModule} from "@angular/common/http";
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    RestaurantsComponent,
    AddRestaurantsComponent,
    PlacesComponent,
    AddPlacesComponent,
    RestaurantDetailComponent,
    PlaceDetailComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
