import { WeatherIconsComponent } from "./weather-icons/weather-icons.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IconsComponent } from "./icons.component";
import { MaterialFilledComponent } from "./material-filled/material-filled.component";
import { MaterialIconsComponent } from "./material-icons/material-icons.component";
import { ThemifyIconsComponent } from "./themify-icons/themify-icons.component";
import { CryptoIconsComponent } from "./crypto-icons/crypto-icons.component";

const routes: Routes = [
  {
    path: "",
    component: IconsComponent,
    children: [
      {
        path: "themify-icons",
        component: ThemifyIconsComponent,
        data: { breadcrumb: "Themify Icons" },
      },
      {
        path: "weather-icons",
        component: WeatherIconsComponent,
        data: { breadcrumb: "Weather Icons" },
      },
      {
        path: "material-icons-outline",
        component: MaterialIconsComponent,
        data: { breadcrumb: "Material Outline Icons" },
      },
      {
        path: "crypto-icons",
        component: CryptoIconsComponent,
        data: { breadcrumb: "Crypto Icons" },
      },
      {
        path: "material-icons",
        component: MaterialFilledComponent,
        data: { breadcrumb: "Material Icons" },
      },
      {
        path: "",
        redirectTo: "/material-icons-outline",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconsRoutingModule {}
