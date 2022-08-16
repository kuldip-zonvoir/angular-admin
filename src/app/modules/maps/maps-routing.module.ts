import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Map1Component } from "./map1/map1.component";

import { MapsComponent } from "./maps.component";

const routes: Routes = [
  {
    path: "",
    component: MapsComponent,
    children: [
      {
        path: "googlemap",
        component: Map1Component,
        data: { breadcrumb: "Google Map" },
      },
      {
        path: "",
        redirectTo: "/googlemap",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
