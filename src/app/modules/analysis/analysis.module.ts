import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AnalysisRoutingModule } from "./analysis-routing.module";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { ApexchartSharedModule } from "src/app/partials/content/shared-components/Apex-chart/apexchart.module";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";
import { SparkLineModule } from "src/app/partials/layouts/sparkline-components/sparkline.module";
import { ChartJsSharedModule } from "src/app/partials/content/shared-components/ChartJs/chartJs.module";
import { WigitModule } from "src/app/partials/layouts/wigit/wigit.module";

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    CommonModule,
    ApexchartSharedModule,
    SharedModule,
    ChartJsSharedModule,
    SparkLineModule,
    AnalysisRoutingModule,
    WigitModule,
  ],
})
export class AnalysisModule {}
