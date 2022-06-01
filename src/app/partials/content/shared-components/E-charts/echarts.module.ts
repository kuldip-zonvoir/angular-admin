import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxEchartsModule } from 'ngx-echarts';
import { LineEchartsComponent } from './line-echarts/line-echarts.component';
import { BarEchartsComponent } from './bar-echarts/bar-echarts.component';
import * as echarts from 'echarts/core';
import {
    LineChart,
    BarChart,
    RadarChart,
    PieChart,
    ScatterChart,
} from 'echarts/charts';
import {
    ToolboxComponent,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
} from 'echarts/components';
// Import the Canvas renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
    CanvasRenderer
} from 'echarts/renderers';
import { PieEchartsComponent } from './pie-echarts/pie-echarts.component';
import { ScatterEchartsComponent } from './scatter-echarts/scatter-echarts.component';
import { MultilineEchartsComponent } from './multiline-echarts/multiline-echarts.component';
import { DonutEchartsComponent } from './donut-echarts/donut-echarts.component';
import { EchartRadarComponent } from './echart-radar/echart-radar.component';
echarts.use(
    [
        TitleComponent,
        PieChart,
        BarChart,
        ScatterChart,
        ToolboxComponent,
        LegendComponent,
        RadarChart,
        TooltipComponent,
        GridComponent,
        LineChart,
        CanvasRenderer
    ]
);


@NgModule({
    declarations: [
        LineEchartsComponent,
        BarEchartsComponent,
        PieEchartsComponent,
        ScatterEchartsComponent,
        MultilineEchartsComponent,
        DonutEchartsComponent,
        EchartRadarComponent,
    ],
    imports: [
        CommonModule,
        NgxEchartsModule.forRoot({ echarts }),
        BsDropdownModule.forRoot(),
    ],
    exports: [
        LineEchartsComponent,
        BarEchartsComponent,
        PieEchartsComponent,
        ScatterEchartsComponent,
        MultilineEchartsComponent,
        DonutEchartsComponent,
        EchartRadarComponent,
    ],

})
export class EChartsModule { }