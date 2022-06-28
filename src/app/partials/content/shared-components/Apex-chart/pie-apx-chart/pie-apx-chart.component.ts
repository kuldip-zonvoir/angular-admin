import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from "ng-apexcharts";
import { ConfigService } from "src/app/partials/core/config.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  responsive: ApexResponsive[];
  labels: any;
  legend: any;
  dataLabels: any;
  tooltip: any;
};
@Component({
  selector: "app-pie-apx-chart",
  templateUrl: "./pie-apx-chart.component.html",
  styleUrls: ["./pie-apx-chart.component.scss"],
})
export class PieApxChartComponent implements OnInit {
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
  ngOnInit(): void {}
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
      series: [44, 55, 13, 43, 22],
      chart: {
        height: 300,
        fontFamily: this.fontFamily,
        type: "pie",
      },
      labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      colors: [
        this.primaryColor,
        this.secondaryColor,
        this.successColor,
        this.purpleColor,
        this.warningColor,
      ],
      legend: {
        show: true,
        position: "right",
        horizontalAlign: "left",
        fontSize: this.fontSize,
        fontColor: this.fontColor,
        fontFamily: this.fontFamily,
        fontWeight: this.fontWeight,
      },

      tooltip: {
        style: {
          fontSize: this.fontSize,
          fontFamily: this.fontFamily,
          fontWeight: this.fontWeight,
        },
      },
      dataLabels: {
        style: {
          fontSize: this.fontSize,
          fontFamily: this.fontFamily,
          fontWeight: this.fontWeight,
        },
      },
    };
  }
}
