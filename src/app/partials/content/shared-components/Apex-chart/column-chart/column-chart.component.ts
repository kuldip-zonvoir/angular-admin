import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
} from "ng-apexcharts";
import { ConfigService } from "src/app/partials/core/config.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  fill: ApexFill;
};
@Component({
  selector: "app-column-chart",
  templateUrl: "./column-chart.component.html",
  styleUrls: ["./column-chart.component.scss"],
})
export class ColumnChartComponent implements OnInit {
  primaryColor: string;
  secondaryColor: string;
  successColor: string;
  infoColor: string;
  warningColor: string;
  dangerColor: string;
  purpleColor: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  fontColor: string;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private _config: ConfigService) {
    this.primaryColor = this._config.getProp(
      "customSetting.colors.theme.light.primary"
    );
    this.secondaryColor = this._config.getProp(
      "customSetting.colors.theme.light.secondary"
    );
    this.warningColor = this._config.getProp(
      "customSetting.colors.theme.light.warning"
    );
    this.successColor = this._config.getProp(
      "customSetting.colors.theme.light.success"
    );
    this.dangerColor = this._config.getProp(
      "customSetting.colors.theme.light.danger"
    );
    this.purpleColor = this._config.getProp(
      "customSetting.colors.theme.light.purple"
    );
    this.infoColor = this._config.getProp(
      "customSetting.colors.theme.light.info"
    );
    this.fontFamily = this._config.getProp("customSetting.styles.font_family");
    this.fontWeight = this._config.getProp("customSetting.styles.font_weight");
    this.fontColor = this._config.getProp("customSetting.styles.color");
    this.fontSize = this._config.getProp("customSetting.styles.font_size");
    this.chartOptions = {
      series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: "PRODUCT D",
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
      chart: {
        type: "bar",
        height: 300,
        stacked: true,
        toolbar: {
          show: false,
          tools: {
            download: false,
          },
        },
        zoom: {
          enabled: false,
        },
      },
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        fontSize: this.fontSize,
        fontFamily: this.fontFamily,
        fontWeight: this.fontWeight,
      },
      colors: [
        this.primaryColor,
        this.secondaryColor,
        this.successColor,
        this.warningColor,
      ],
      tooltip: {
        style: {
          fontSize: this.fontSize,
          fontFamily: this.fontFamily,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontWeight: this.fontWeight,
          },
        },
      },
      xaxis: {
        type: "category",
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
        labels: {
          style: {
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontWeight: this.fontWeight,
          },
        },
      },
      fill: {
        opacity: 1,
      },
    };
  }

  ngOnInit(): void {}
}
