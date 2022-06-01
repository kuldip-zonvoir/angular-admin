import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
  ApexStroke,
  ApexFill,
  ApexTooltip,
  ApexLegend,
  ApexYAxis,
} from "ng-apexcharts";
import { ConfigService } from "src/app/partials/core/config.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  responsive: ApexResponsive[];
  labels: any;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  stroke: ApexStroke;
  fill: ApexFill;
};

@Component({
  selector: "app-polar-chart",
  templateUrl: "./polar-chart.component.html",
  styleUrls: ["./polar-chart.component.scss"],
})
export class PolarChartComponent implements OnInit {
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
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
        type: "polarArea",
        fontFamily: this.fontFamily,
      },
      colors: [
        this.primaryColor,
        this.secondaryColor,
        this.successColor,
        this.purpleColor,
        this.warningColor,
      ],
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.5,
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
        show: true,
        position: "right",
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
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void {}
}
