import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApexChartComponent } from "./apex-chart/apex-chart.component";
import { ChartjscustomComponent } from "./chartjscustom/chartjscustom.component";
import { NGXChartsComponent } from "./ngx-charts/ngx-charts.component";
import { ChartsComponent } from "./charts.component";
import { GoogleChartsComponent } from "./google-charts/google-charts.component";
import { EChartsComponent } from "./e-charts/e-charts.component";
import { SparklineTypeApexChartsComponent } from "./sparkline-type-apex-charts/sparkline-type-apex-charts.component";

const routes: Routes = [
  {
    path: "",
    component: ChartsComponent,
    children: [
      {
        path: "ngx-chart",
        component: NGXChartsComponent,
        data: { breadcrumb: "Ngx chart" },
      },
      {
        path: "sparkline-charts",
        component: SparklineTypeApexChartsComponent,
        data: { breadcrumb: "Sparkline Charts" },
      },
      {
        path: "e-chart",
        component: EChartsComponent,
        data: { breadcrumb: "E-chart" },
      },
      {
        path: "google-chart",
        component: GoogleChartsComponent,
        data: { breadcrumb: "Google Chart" },
      },
      {
        path: "apex-chart",
        component: ApexChartComponent,
        data: { breadcrumb: "Apex Chart" },
      },
      {
        path: "chartjs",
        component: ChartjscustomComponent,
        data: { breadcrumb: "ChartJs" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
