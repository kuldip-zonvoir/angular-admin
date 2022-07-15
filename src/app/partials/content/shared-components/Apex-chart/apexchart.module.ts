import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgApexchartsModule } from "ng-apexcharts";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { BubbleApxChartComponent } from "./bubble-apx-chart/bubble-apx-chart.component";
import { AreaApxChartComponent } from "./area-apx-chart/area-apx-chart.component";
import { RadialBarApxChartComponent } from "./radial-bar-apx-chart/radial-bar-apx-chart.component";
import { PieApxChartComponent } from "./pie-apx-chart/pie-apx-chart.component";
import { DoughnuApxChartComponent } from "./doughnu-apx-chart/doughnu-apx-chart.component";
import { ColumnChartComponent } from "./column-chart/column-chart.component";
import { RadarChartComponent } from "./radar-chart/radar-chart.component";
import { PolarChartComponent } from "./polar-chart/polar-chart.component";
import { PpexCandelStickComponent } from "./ppex-candel-stick/ppex-candel-stick.component";
import { ApexColoumChartComponent } from "./apex-coloum-chart/apex-coloum-chart.component";
import { StackedAreaApxComponent } from "./stacked-area-apx/stacked-area-apx.component";
import { ApexDatetimeXAxisComponent } from "./apex-datetime-x-axis/apex-datetime-x-axis.component";

@NgModule({
  declarations: [
    //charts
    BarChartComponent,
    LineChartComponent,
    BubbleApxChartComponent,
    AreaApxChartComponent,
    RadialBarApxChartComponent,
    PieApxChartComponent,
    DoughnuApxChartComponent,
    ColumnChartComponent,
    RadarChartComponent,
    PolarChartComponent,
    PpexCandelStickComponent,
    ApexColoumChartComponent,
    StackedAreaApxComponent,
    ApexDatetimeXAxisComponent,
  ],
  imports: [CommonModule, NgApexchartsModule, BsDropdownModule.forRoot()],
  exports: [
    BarChartComponent,
    LineChartComponent,
    BubbleApxChartComponent,
    AreaApxChartComponent,
    RadialBarApxChartComponent,
    PieApxChartComponent,
    DoughnuApxChartComponent,
    ColumnChartComponent,
    RadarChartComponent,
    PolarChartComponent,
    PpexCandelStickComponent,
    ApexColoumChartComponent,
    StackedAreaApxComponent,
    ApexDatetimeXAxisComponent,
  ],
})
export class ApexchartSharedModule {}
