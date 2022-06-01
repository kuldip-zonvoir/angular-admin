import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexLegend,
  ApexStroke,
  ApexMarkers
} from "ng-apexcharts";
import { ConfigService } from 'src/app/partials/core/config.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  colors:string[];
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {
          whiteColor: string;
          primaryColor: string;
          secondaryColor: string;
          successColor: string;
          infoColor: string;
          
          warningColor: string;
          dangerColor: string;
          purpleColor: string;
          darkColor: string;
          fontFamily:string;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

   constructor( private _config:ConfigService) {
       this.primaryColor = this._config.getProp('customSetting.colors.theme.light.primary');
    this.secondaryColor = this._config.getProp('customSetting.colors.theme.light.secondary');
    this.warningColor = this._config.getProp('customSetting.colors.theme.light.warning');
    this.successColor = this._config.getProp('customSetting.colors.theme.light.success');
    this.dangerColor = this._config.getProp('customSetting.colors.theme.light.danger');
    this.purpleColor = this._config.getProp('customSetting.colors.theme.light.purple');
    this.infoColor = this._config.getProp('customSetting.colors.theme.light.info');
    this.fontFamily = this._config.getProp('customSetting.fontFamily');
    this.chartOptions = {
      series: [
        {
          name: "Series Blue",
          data: [80, 50, 30, 40, 100, 20]
        },
        {
          name: "Series Green",
          data: [20, 30, 40, 80, 20, 80]
        },
        {
          name: "Series Orange",
          data: [44, 76, 78, 13, 43, 10]
        }
      ],
      chart: {
        height: 300,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      colors:[this.primaryColor,this.secondaryColor,this.successColor,this.purpleColor,this.warningColor],
      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
      }
    };
  }

  ngOnInit(): void {
  }

}
