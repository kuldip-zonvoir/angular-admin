import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Color, Label } from "ng2-charts";
import { ConfigService } from "src/app/partials/core/config.service";
export type ChartOption = {
  radarChartLabels: Label[];
  radarChartOptions: ChartOptions;
  radarChartColors: Color[];
  radarChartData: ChartDataSets[];
  radarChartLegend: boolean;
  radarChartType: ChartType;
  radarChartPlugins: [];
};
@Component({
  selector: "app-radar-chartjs",
  templateUrl: "./radar-chartjs.component.html",
  styleUrls: ["./radar-chartjs.component.scss"],
})
export class RadarChartjsComponent implements OnInit {
  primaryColor: string;
  secondaryColor: string;
  successColor: string;
  infoColor: string;
  warningColor: string;
  dangerColor: string;
  purpleColor: string;
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
      // Array of different segments in chart
      radarChartData: [
        {
          label: "My First Dataset",
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,

          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
        {
          label: "My Second Dataset",
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBackgroundColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(54, 162, 235)",
        },
      ],

      //Labels shown on the x-axis
      radarChartLabels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
      ],

      // Define chart options
      radarChartOptions: {
        responsive: true,
        scale: {
          ticks: {
            fontColor: this.fontColor,
            fontFamily: this.fontFamily,

            fontSize: this.fontSize,
          },
          angleLines: {
            color: this.fontColor,
          },
          gridLines: {},
          pointLabels: {
            fontColor: this.fontColor,
            fontFamily: this.fontFamily,
            fontStyle: this.fontWeight,
            fontSize: this.fontSize,
          },
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
      // Define colors of chart segments
      radarChartColors: [
        {
          // primary
          backgroundColor: [this.primaryColor],
          borderColor: [this.primaryColor],
        },
        {
          // secondary
          backgroundColor: [this.secondaryColor],
          borderColor: [this.primaryColor],
        },
      ],

      // Set true to show legends
      radarChartLegend: true,

      // Define type of chart
      radarChartType: "radar",

      radarChartPlugins: [],
    };
  }

  ngOnInit(): void {}

  // events
  chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }
}
