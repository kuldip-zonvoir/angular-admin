import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MultiDashboardRoutingModule } from "./multi-dashboard-routing.module";
import { MultiDashboardComponent } from "./multi-dashboard.component";
import { Dashbord1Component } from "./dashbord1/dashbord1.component";
import { Dashbord2Component } from "./dashbord2/dashbord2.component";
import { Dashbord3Component } from "./dashbord3/dashbord3.component";
import { Dashbord4Component } from "./dashbord4/dashbord4.component";
import { SparkLineModule } from "src/app/partials/layouts/sparkline-components/sparkline.module";
import { ReUseCardsModule } from "src/app/partials/reuse-cards/reuse.cards.module";
import { ChartCardsModule } from "src/app/partials/reuse-cards/chart-cards/chart-cards.module";
import { EChartsModule } from "src/app/partials/content/shared-components/E-charts/echarts.module";
import { UtilityCardsModule } from "src/app/partials/reuse-cards/ultility-card/utilitycard.module";
import { WigitModule } from "src/app/partials/layouts/wigit/wigit.module";
import { DataTabelModule } from "src/app/partials/layouts/datatables/datatabel.module";
import { ChartJsSharedModule } from "src/app/partials/content/shared-components/ChartJs/chartJs.module";
import { ApexchartSharedModule } from "src/app/partials/content/shared-components/Apex-chart/apexchart.module";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";

@NgModule({
  declarations: [
    MultiDashboardComponent,
    Dashbord1Component,
    Dashbord2Component,
    Dashbord3Component,
    Dashbord4Component,
  ],
  imports: [
    CommonModule,
    SparkLineModule,
    EChartsModule,
    ApexchartSharedModule,
    ChartJsSharedModule,
    WigitModule,
    ReUseCardsModule,
    SharedModule,
    DataTabelModule,
    UtilityCardsModule,
    ChartCardsModule,
    ProgressbarModule.forRoot(),
    ReUseCardsModule,
    MultiDashboardRoutingModule,
  ],
})
export class MultiDashboardModule {}
