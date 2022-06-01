import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChartsRoutingModule } from "./charts-routing.module";
import { ChartsComponent } from "./charts.component";
import { ApexChartComponent } from "./apex-chart/apex-chart.component";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";
import { ChartjscustomComponent } from "./chartjscustom/chartjscustom.component";
import { ApexchartSharedModule } from "src/app/partials/content/shared-components/Apex-chart/apexchart.module";
import { ChartJsSharedModule } from "src/app/partials/content/shared-components/ChartJs/chartJs.module";
import { NGXChartsComponent } from "./ngx-charts/ngx-charts.component";
import { NgxChartModule } from "src/app/partials/content/shared-components/Ngx-charts/ngx-chart.module";
import { GoogleChartsComponent } from "./google-charts/google-charts.component";
import { GoogleChartsModule } from "src/app/partials/content/shared-components/Google-charts/google.module";
import { EChartsComponent } from "./e-charts/e-charts.component";
import { EChartsModule } from "src/app/partials/content/shared-components/E-charts/echarts.module";
import { SparklineTypeApexChartsComponent } from "./sparkline-type-apex-charts/sparkline-type-apex-charts.component";
import { ChartCardsModule } from "src/app/partials/reuse-cards/chart-cards/chart-cards.module";
import { SparkLineModule } from "src/app/partials/layouts/sparkline-components/sparkline.module";

@NgModule({
  declarations: [
    ChartsComponent,
    ApexChartComponent,
    ChartjscustomComponent,
    NGXChartsComponent,
    GoogleChartsComponent,
    EChartsComponent,
    SparklineTypeApexChartsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApexchartSharedModule,
    ChartJsSharedModule,
    EChartsModule,
    ChartCardsModule,
    SparkLineModule,
    NgxChartModule,
    GoogleChartsModule,
    ChartsRoutingModule,
  ],
})
export class ChartsModule {}
