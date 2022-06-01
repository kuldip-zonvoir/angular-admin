import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexNonAxisChartSeries,
  ChartComponent,
  ApexPlotOptions,
  ApexChart,
} from "ng-apexcharts";
import { ConfigService } from "src/app/partials/core/config.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  labels: string[];
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: "app-radial-bar-apx-chart",
  templateUrl: "./radial-bar-apx-chart.component.html",
  styleUrls: ["./radial-bar-apx-chart.component.scss"],
})
export class RadialBarApxChartComponent implements OnInit {
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
      series: [44, 55, 67, 83],
      chart: {
        height: 300,
        type: "radialBar",
      },
      colors: [
        this.primaryColor,
        this.secondaryColor,
        this.successColor,
        this.purpleColor,
        this.warningColor,
      ],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
              fontFamily: this.fontFamily,
            },
            value: {
              fontSize: this.fontSize,
              fontFamily: this.fontFamily,
              fontWeight: this.fontWeight,
            },
            total: {
              fontFamily: this.fontFamily,
              show: true,
              label: "Total",
              formatter: function (w) {
                return "249";
              },
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
    };
  }
  ngOnInit(): void {}
}
