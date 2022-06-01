import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapComponent } from "./map/map.component";

import { MapsComponent } from "./maps.component";

const routes: Routes = [
  {
    path: "",
    component: MapsComponent,
    children: [
      {
        path: "googlemap",
        component: MapComponent,
        data: { breadcrumb: "Google Map" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
