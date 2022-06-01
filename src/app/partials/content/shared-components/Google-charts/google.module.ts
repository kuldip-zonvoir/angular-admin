import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { GoogleBarChartsComponent } from './google-bar-charts/google-bar-charts.component';
import { GooglePieChartsComponent } from './google-pie-charts/google-pie-charts.component';
import { GoogleScatterChartComponent } from './google-scatter-chart/google-scatter-chart.component';
import { GoogleStackedChartComponent } from './google-stacked-chart/google-stacked-chart.component';


@NgModule({
    declarations: [
        GoogleBarChartsComponent,
        GooglePieChartsComponent,
        GoogleScatterChartComponent,
        GoogleStackedChartComponent,
    ],
    imports: [
        CommonModule,
        Ng2GoogleChartsModule,
        BsDropdownModule.forRoot(),
    ],
    exports: [
        GoogleBarChartsComponent,
        GooglePieChartsComponent,
        GoogleScatterChartComponent,
        GoogleStackedChartComponent,
    ],

})
export class GoogleChartsModule { }