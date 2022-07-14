import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgApexchartsModule } from "ng-apexcharts";

import { ApexSparkBarComponent } from "./apex-spark-bar/apex-spark-bar.component";
import { ApexSparklineAreaComponent } from "./apex-sparkline-area/apex-sparkline-area.component";
import { ApexSparklineComponent } from "./apex-sparkline/apex-sparkline.component";
import { ApexSparklinePieComponent } from "./apex-sparkline-pie/apex-sparkline-pie.component";
import { ApexSparklineRadialComponent } from "./apex-sparkline-radial/apex-sparkline-radial.component";
import { ApexSparklineDonutComponent } from "./apex-sparkline-donut/apex-sparkline-donut.component";
import { ApexSparklineArea2Component } from "./apex-sparkline-area2/apex-sparkline-area2.component";
@NgModule({
  declarations: [
    ApexSparklineAreaComponent,
    ApexSparklineComponent,
    ApexSparkBarComponent,
    ApexSparklinePieComponent,
    ApexSparklineRadialComponent,
    ApexSparklineDonutComponent,
    ApexSparklineArea2Component,
  ],
  imports: [CommonModule, NgApexchartsModule],
  exports: [
    ApexSparklineArea2Component,
    ApexSparklineAreaComponent,
    ApexSparklineComponent,
    ApexSparkBarComponent,
    ApexSparklinePieComponent,
    ApexSparklineRadialComponent,
    ApexSparklineDonutComponent,
  ],
})
export class SparkLineModule {}
