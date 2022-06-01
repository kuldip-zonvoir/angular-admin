import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexFill,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexTooltip,
} from "ng-apexcharts";
import { ConfigService } from "src/app/partials/core/config.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
};
@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"],
})
export class BarChartComponent implements OnInit {
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
      series: [
        {
          name: "Category 1",
          data: [44, 55, 41, 64],
        },
        {
          name: "Category 2",
          data: [53, 32, 33, 52],
        },
      ],
      chart: {
        type: "bar",
        width: "100%",
        height: 300,
        fontFamily: this.fontFamily,
        toolbar: {
          show: false,
          tools: {
            download: false,
          },
        },
      },
      colors: [this.primaryColor, this.secondaryColor],

      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: this.fontSize,
          fontFamily: this.fontFamily,
        },
      },
      stroke: {
        show: false,
        width: 1,
        colors: ["#fff"],
      },

      xaxis: {
        categories: [2004, 2005, 2006, 2007],
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
        show: true,
        position: "bottom",
        horizontalAlign: "center",
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
}
