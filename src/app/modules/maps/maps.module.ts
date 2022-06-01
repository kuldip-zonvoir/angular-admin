import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GoogleMapsModule } from "@angular/google-maps";

import { MapsRoutingModule } from "./maps-routing.module";
import { MapsComponent } from "./maps.component";
import { MapComponent } from "./map/map.component";

@NgModule({
  declarations: [MapsComponent, MapComponent],
  imports: [CommonModule, GoogleMapsModule, MapsRoutingModule],
})
export class MapsModule {}
