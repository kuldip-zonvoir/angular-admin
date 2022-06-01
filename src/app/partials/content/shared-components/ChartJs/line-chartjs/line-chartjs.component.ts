import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartScales } from "chart.js";
import { Color, Label } from "ng2-charts";
import { ConfigService } from "src/app/partials/core/config.service";
export type ChartOption = {
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: ChartOptions;
  lineChartColors: Color[];
  lineChartLegend: boolean;
  lineChartType: string;
  lineChartPlugins: [];
};
@Component({
  selector: "app-line-chartjs",
  templateUrl: "./line-chartjs.component.html",
  styleUrls: ["./line-chartjs.component.scss"],
})
export class LineChartjsComponent implements OnInit {
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
  fontSize: number;
  fontWeight: string;
  fontColor: string;
  chartValue: Partial<ChartOption>;
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
    this.fontSize = +this._config
      .getProp("customSetting.styles.font_size")
      .replace("px", "");
    this.chartValue = {
      // lineChartData: [{ data: [28, 48, 40, 19, 86, 27, 90], label: "Users" }],
      lineChartData: [
        { data: [0, 20, 50, 81, 56, 55, 40], label: "Orders" },
        { data: [28, 48, 40, 19, 86, 27, 90], label: "Users" },
      ],

      //Labels shown on the x-axis
      lineChartLabels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],

      // Define chart options
      lineChartOptions: {
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontWeight,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontWeight,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
        tooltips: { bodyFontSize: this.fontSize },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            fontColor: this.fontColor,
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontStyle: this.fontWeight,
          },
        },
      },
      lineChartColors: [
        {
          // dark grey
          backgroundColor: "rgba(35, 130, 247,0.3)",
          borderColor: "rgba(35, 130, 247,1)",
        },
        {
          // green
          backgroundColor: "rgba(6, 215,155,0.2)",
          borderColor: "rgb(6, 215,155,1)",
        },
      ],

      // Set true to show legends
      lineChartLegend: false,

      // Define type of chart
      lineChartType: "line",

      lineChartPlugins: [],
    };
  }

  ngOnInit(): void {}

  // events
  chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {}

  chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {}
}
