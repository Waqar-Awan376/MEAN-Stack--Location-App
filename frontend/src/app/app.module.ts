import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AddRestaurantsComponent } from './add-restaurants/add-restaurants.component';
import { MuseumsComponent } from './museums/museums.component';
import { AddMuseumsComponent } from './add-museums/add-museums.component';
import {HttpClientModule} from "@angular/common/http";
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { CommentsComponent } from './comments/comments.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { UpdateMuseumComponent } from './update-museum/update-museum.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    RestaurantsComponent,
    AddRestaurantsComponent,
    MuseumsComponent,
    AddMuseumsComponent,
    RestaurantDetailComponent,
    MuseumDetailComponent,
    CommentsComponent,
    UpdateRestaurantComponent,
    UpdateMuseumComponent,
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
