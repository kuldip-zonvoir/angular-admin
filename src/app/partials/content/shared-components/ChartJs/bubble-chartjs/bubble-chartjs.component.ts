import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Color, Label } from "ng2-charts";
import { ConfigService } from "src/app/partials/core/config.service";
export type ChartOption = {
  bubbleChartData: ChartDataSets[];
  bubbleChartLabels: Label[];
  bubbleChartOptions: ChartOptions;
  bubbleChartColors: Color[];
  bubbleChartLegend: boolean;
  bubbleChartType: ChartType;
  bubbleChartPlugins: [];
};
@Component({
  selector: "app-bubble-chartjs",
  templateUrl: "./bubble-chartjs.component.html",
  styleUrls: ["./bubble-chartjs.component.scss"],
})
export class BubbleChartjsComponent implements OnInit {
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
      bubbleChartOptions: {
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontWeight,
                min: 0,
                max: 250000,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 80,
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
      bubbleChartType: "bubble",
      bubbleChartLegend: true,
      bubbleChartColors: [
        {
          // primary
          backgroundColor: [
            this.primaryColor,
            this.secondaryColor,
            this.successColor,
            this.warningColor,
            this.purpleColor,
          ],
          borderColor: [
            this.primaryColor,
            this.secondaryColor,
            this.successColor,
            this.warningColor,
            this.purpleColor,
          ],
        },
      ],
      bubbleChartData: [
        {
          data: [
            { x: 45, y: 150000, r: 22.22 },
            { x: 42, y: 110000, r: 33.0 },
            { x: 60, y: 80637, r: 15.22 },
            { x: 75, y: 195055, r: 21.5 },
            { x: 30, y: 160446, r: 35.67 },
          ],
          label: "Units sold, Sales and Profitability",
        },
      ],
    };
  }

  ngOnInit(): void {}
}
