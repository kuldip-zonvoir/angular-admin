import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GoogleMapsModule } from "@angular/google-maps";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { MapsRoutingModule } from "./maps-routing.module";
import { MapsComponent } from "./maps.component";
import { Map1Component } from './map1/map1.component';

@NgModule({
  declarations: [MapsComponent, Map1Component],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MapsRoutingModule,
  ],
})
export class MapsModule {}
