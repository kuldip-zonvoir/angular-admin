import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexChart;
};
@Component({
  selector: 'app-apex-sparkline-pie',
  templateUrl: './apex-sparkline-pie.component.html',
  styleUrls: ['./apex-sparkline-pie.component.scss']
})
export class ApexSparklinePieComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  ngOnInit(): void {
  }


  constructor() {
    this.chartOptions = {
      series: [30, 40, 30],
      chart: {
        height: 150,
        type: "pie",
        sparkline: {
          enabled: true
        }
      },
      labels: ["Prodduct A", "Prodduct B", "Prodduct C"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],

    };
  }
}
