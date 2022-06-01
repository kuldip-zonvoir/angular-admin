import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ChartComponent,
  ApexPlotOptions,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-apex-sparkline-radial',
  templateUrl: './apex-sparkline-radial.component.html',
  styleUrls: ['./apex-sparkline-radial.component.scss']
})
export class ApexSparklineRadialComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  ngOnInit(): void {
  }




  constructor() {
    this.chartOptions = {
      series: [43, 30, 67],
      chart: {
        height: 150,
        type: "radialBar",
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "16px"
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return "249";
              }
            }
          }
        }
      },
      labels: ["Apples", "Oranges", "Bananas"]
    };
  }

}
