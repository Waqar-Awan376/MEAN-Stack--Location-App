import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {AddRestaurantsComponent} from "./add-restaurants/add-restaurants.component";
import {MuseumsComponent} from "./museums/museums.component";
import {AddMuseumsComponent} from "./add-museums/add-museums.component";
import {RestaurantDetailComponent} from "./restaurant-detail/restaurant-detail.component";
import {MuseumDetailComponent} from "./museum-detail/museum-detail.component";
import {UpdateRestaurantComponent} from "./update-restaurant/update-restaurant.component";
import {UpdateMuseumComponent} from "./update-museum/update-museum.component";

const appRoutes: Routes = [
  {path:'',component:HomeComponent },
  {path:'restaurantList',component:RestaurantsComponent},
  {path:'addRestaurant',component:AddRestaurantsComponent},
  {path:'updateRestaurant',component:UpdateRestaurantComponent},
  {path:'restaurantDetail',component:RestaurantDetailComponent},
  {path:'museumList',component:MuseumsComponent},
  {path:'museumDetail',component:MuseumDetailComponent},
  {path:'updateMuseum',component:UpdateMuseumComponent},
  {path:'addMuseum',component:AddMuseumsComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
