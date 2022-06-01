import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexNonAxisChartSeries,
  ChartComponent,
  ApexPlotOptions,
  ApexResponsive,
  ApexChart,
  ApexLegend,
  ApexDataLabels,
} from "ng-apexcharts";
import { ConfigService } from "src/app/partials/core/config.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: "app-doughnu-apx-chart",
  templateUrl: "./doughnu-apx-chart.component.html",
  styleUrls: ["./doughnu-apx-chart.component.scss"],
})
export class DoughnuApxChartComponent implements OnInit {
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
      series: [35, 40, 25],
      chart: {
        type: "donut",
        fontFamily: this.fontFamily,
        height: 300,
      },
      labels: ["Ticket A", "Ticket B", "Ticket C"],
      colors: [this.primaryColor, this.secondaryColor, this.successColor],
      dataLabels: {
        style: {
          fontSize: this.fontSize,
          fontFamily: this.fontFamily,
          fontWeight: this.fontWeight,
        },
      },
      legend: {
        show: true,
        position: "right",
        fontSize: this.fontSize,
        fontFamily: this.fontFamily,
        fontWeight: this.fontWeight,
      },
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
    };
  }

  ngOnInit(): void {}
}
