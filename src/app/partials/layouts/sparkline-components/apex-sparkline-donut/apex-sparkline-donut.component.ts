import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  ApexNonAxisChartSeries,
  ChartComponent,
  ApexPlotOptions,
  ApexResponsive,
  ApexChart,
  ApexLegend,
  ApexDataLabels,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  labels: any;
  fill: any;
  markers: any;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: "app-apex-sparkline-donut",
  templateUrl: "./apex-sparkline-donut.component.html",
  styleUrls: ["./apex-sparkline-donut.component.scss"],
})
export class ApexSparklineDonutComponent implements OnInit {
  @Input("chartParams") myChart: any = {};
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {}

  ngOnInit(): void {
    this.setChartOptions();
  }

  setChartOptions() {
    this.chartOptions = this.myChart;
  }
}
