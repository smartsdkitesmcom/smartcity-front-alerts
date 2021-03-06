import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapSmartSDKComponent} from "../map-smart-sdk/map-smart-sdk.component";
import {AlertTypesListComponent} from "../alert-types-list/alert-types-list.component";
import {AlertTypeAlertsListComponent} from "../alert-type-alerts-list/alert-type-alerts-list.component";
import {UserAlertsListComponent} from "../user-alerts-list/user-alerts-list.component";
import {AboutComponent} from "../about/about.component";
import {HowToEnableGeolocationComponent} from "../about/how-to-enable-geolocation/how-to-enable-geolocation.component";
import {ContactUsComponent} from "../about/contact-us/contact-us.component";
import {CoordinateMarkerComponent} from "../coordinate-marker/coordinate-marker.component";
import {LoginComponent} from "../login/login.component";
import {RegisterUserComponent} from "../register-user/register-user.component";
import {LoggedInUserGuard} from "app/core/services/login/logged-in-user.guard";

const routes: Routes = [

  {
    path: '', redirectTo: 'map', pathMatch: 'full'},
  {
    path: 'map' , component: MapSmartSDKComponent,
  children : [
    // {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'viewAlert/:alertId', component: CoordinateMarkerComponent},
  ], canActivate: [ LoggedInUserGuard ]
  },
  {
    path:'registerUser',component:RegisterUserComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path: 'AlertTypeAlertsList/:name/:address', component: AlertTypeAlertsListComponent
  },
  {
    path: 'about', component: AboutComponent,
    children : [
      { path : '', component : ContactUsComponent },
      {path: 'HowToEnableGeolocation', component: HowToEnableGeolocationComponent},
    ]
  },
  {path: 'userAlerts', component: UserAlertsListComponent},
  {path: '', component: UserAlertsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true} )],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
