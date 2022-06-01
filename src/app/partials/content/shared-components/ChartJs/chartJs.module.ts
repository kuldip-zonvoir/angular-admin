import { BubbleChartjsComponent } from './bubble-chartjs/bubble-chartjs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LineChartjsComponent } from './line-chartjs/line-chartjs.component';
import { PieChartjsComponent } from './pie-chartjs/pie-chartjs.component';
import { DoughtnutChartjsComponent } from './doughtnut-chartjs/doughtnut-chartjs.component';
import { ScatterChartjsComponent } from './scatter-chartjs/scatter-chartjs.component';
import { BarChartjsComponent } from './bar-chartjs/bar-chartjs.component';
import { RadarChartjsComponent } from './radar-chartjs/radar-chartjs.component';
import { PolarAreaChartjsComponent } from './polar-area-chartjs/polar-area-chartjs.component';

@NgModule({
    declarations: [
        LineChartjsComponent,
        PieChartjsComponent,
        BarChartjsComponent,
        BubbleChartjsComponent,
        DoughtnutChartjsComponent,
        ScatterChartjsComponent,
        RadarChartjsComponent,
        PolarAreaChartjsComponent,
    ],
    imports: [
        CommonModule,
        ChartsModule,
        BsDropdownModule.forRoot(),
    ],
    exports: [
        LineChartjsComponent,
        PieChartjsComponent,
        BarChartjsComponent,
        BubbleChartjsComponent,
        DoughtnutChartjsComponent,
        ScatterChartjsComponent,
        RadarChartjsComponent,
        PolarAreaChartjsComponent,
    ],

})
export class ChartJsSharedModule { }