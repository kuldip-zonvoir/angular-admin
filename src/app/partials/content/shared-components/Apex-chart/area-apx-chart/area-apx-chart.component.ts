import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexGrid,
  ApexTooltip,
} from "ng-apexcharts";
import { ConfigService } from "src/app/partials/core/config.service";

import { series } from "./data";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  colors: string[];
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  grid: ApexGrid;
};
@Component({
  selector: "app-area-apx-chart",
  templateUrl: "./area-apx-chart.component.html",
  styleUrls: ["./area-apx-chart.component.scss"],
})
export class AreaApxChartComponent implements OnInit {
  whiteColor: string;
  primaryColor: string;
  secondaryColor: string;
  successColor: string;
  infoColor: string;
  warningColor: string;
  dangerColor: string;
  purpleColor: string;
  darkColor: string;
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
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices,
        },
      ],
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      chart: {
        type: "area",
        width: "100%",
        height: 300,
        fontFamily: this.fontFamily,
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
      colors: [this.primaryColor],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontWeight: this.fontWeight,
          },
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
      legend: {
        horizontalAlign: "left",
        fontSize: this.fontSize,
        fontFamily: this.fontFamily,
        fontWeight: this.fontWeight,
      },
      tooltip: {
        style: {
          fontSize: this.fontSize,
          fontFamily: this.fontFamily,
        },
      },
    };
  }

  ngOnInit(): void {}
}
