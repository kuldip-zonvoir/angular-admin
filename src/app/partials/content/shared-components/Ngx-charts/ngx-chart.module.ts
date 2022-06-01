import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxBarChartComponent } from "./ngx-bar-chart/ngx-bar-chart.component";
import { NgxPieChartComponent } from "./ngx-pie-chart/ngx-pie-chart.component";
import { NgxHorihontalBarChartComponent } from "./ngx-horihontal-bar-chart/ngx-horihontal-bar-chart.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { AdvanceNgxPieChartComponent } from "./advance-ngx-pie-chart/advance-ngx-pie-chart.component";

@NgModule({
  declarations: [
    NgxBarChartComponent,
    NgxPieChartComponent,
    AdvanceNgxPieChartComponent,
    NgxHorihontalBarChartComponent,
  ],
  imports: [CommonModule, NgxChartsModule],
  exports: [
    NgxBarChartComponent,
    NgxPieChartComponent,
    AdvanceNgxPieChartComponent,
    NgxHorihontalBarChartComponent,
  ],
})
export class NgxChartModule {}
