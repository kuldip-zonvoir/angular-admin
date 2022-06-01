import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardWrapperComponent } from "./dashboard-wrapper/dashboard-wrapper.component";
import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { SharedModule } from "../../content/shared-components/shared.module";
import { RouterModule } from "@angular/router";
import { DashTileComponent } from "./dash-tile/dash-tile.component";
import { WigitModule } from "../wigit/wigit.module";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ApexchartSharedModule } from "../../content/shared-components/Apex-chart/apexchart.module";
import { ChartJsSharedModule } from "../../content/shared-components/ChartJs/chartJs.module";
import { DataTabelModule } from "../datatables/datatabel.module";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { SparkLineModule } from "../sparkline-components/sparkline.module";
import { UtilityCardsModule } from "../../reuse-cards/ultility-card/utilitycard.module";
import { ChartCardsModule } from "../../reuse-cards/chart-cards/chart-cards.module";
import { ReUseCardsModule } from "../../reuse-cards/reuse.cards.module";

@NgModule({
  declarations: [
    DashboardWrapperComponent,
    Dashboard1Component,
    DashTileComponent,
    Dashboard2Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DataTabelModule,
    WigitModule,
    ReUseCardsModule,
    UtilityCardsModule,
    ChartCardsModule,
    SparkLineModule,
    ApexchartSharedModule,
    ChartJsSharedModule,
    ProgressbarModule.forRoot(),
  ],
  exports: [
    DashboardWrapperComponent,
    Dashboard1Component,
    Dashboard2Component,
    DashTileComponent,
  ],
})
export class DashboardModule {}
