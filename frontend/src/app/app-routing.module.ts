import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {AddRestaurantsComponent} from "./add-restaurants/add-restaurants.component";
import {PlacesComponent} from "./places/places.component";
import {AddPlacesComponent} from "./add-places/add-places.component";
import {RestaurantDetailComponent} from "./restaurant-detail/restaurant-detail.component";
import {PlaceDetailComponent} from "./place-detail/place-detail.component";

const appRoutes: Routes = [
  {path:'',component:HomeComponent },
  {path:'restaurantList',component:RestaurantsComponent},
  {path:'addRestaurant',component:AddRestaurantsComponent},
  {path:'restaurantDetail',component:RestaurantDetailComponent},
  {path:'placesList',component:PlacesComponent},
  {path:'placeDetail',component:PlaceDetailComponent},
  {path:'addPlace',component:AddPlacesComponent},
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
