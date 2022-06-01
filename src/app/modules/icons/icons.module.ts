import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IconsRoutingModule } from "./icons-routing.module";
import { IconsComponent } from "./icons.component";
import { MaterialIconsComponent } from "./material-icons/material-icons.component";
import { MatIconWraperComponent } from "./material-icons/mat-icon-wraper/mat-icon-wraper.component";
import { MaterialFilledComponent } from "./material-filled/material-filled.component";
import { FilledIconsComponent } from "./material-filled/filled-icons/filled-icons.component";
import { ThemifyIconsComponent } from "./themify-icons/themify-icons.component";
import { CryptoIconsComponent } from "./crypto-icons/crypto-icons.component";
import { WeatherIconsComponent } from "./weather-icons/weather-icons.component";
import { ThemifyIconComponent } from "./themify-icons/themify-icon/themify-icon.component";
import { WeatherIconComponent } from "./weather-icons/weather-icon/weather-icon.component";
import { CryptoIconComponent } from "./crypto-icons/crypto-icon/crypto-icon.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    IconsComponent,
    MaterialIconsComponent,
    MatIconWraperComponent,
    MaterialFilledComponent,
    FilledIconsComponent,
    ThemifyIconsComponent,
    CryptoIconsComponent,
    WeatherIconsComponent,
    ThemifyIconComponent,
    WeatherIconComponent,
    CryptoIconComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, IconsRoutingModule],
  providers: [],
})
export class IconsModule {}
