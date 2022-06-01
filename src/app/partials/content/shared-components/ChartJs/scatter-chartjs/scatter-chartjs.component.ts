import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartDataSets, ChartType } from "chart.js";
import { Color, Label } from "ng2-charts";
import { ConfigService } from "src/app/partials/core/config.service";
export type ChartOption = {
  scatterChartLabels: Label[];
  scatterChartOptions: ChartOptions;
  scatterChartColors: Color[];
  scatterChartData: ChartDataSets[];
  scatterChartLegend: boolean;
  scatterChartType: ChartType;
  scatterChartPlugins: [];
};
@Component({
  selector: "app-scatter-chartjs",
  templateUrl: "./scatter-chartjs.component.html",
  styleUrls: ["./scatter-chartjs.component.scss"],
})
export class ScatterChartjsComponent implements OnInit {
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
      scatterChartOptions: {
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
      scatterChartData: [
        {
          data: [
            { x: 14.2, y: 215 },
            { x: 16.4, y: 325 },
            { x: 11.9, y: 185 },
            { x: 15.2, y: 332 },
            { x: 18.5, y: 406 },
            { x: 22.1, y: 522 },
            { x: 19.4, y: 412 },
            { x: 25.1, y: 614 },
            { x: 23.4, y: 544 },
            { x: 18.1, y: 421 },
          ],
          label: " sales vs buy",
          pointRadius: 10,
        },
      ],
      scatterChartColors: [
        {
          // primary
          backgroundColor: [
            this.primaryColor,
            this.secondaryColor,
            this.successColor,
            this.warningColor,
            this.dangerColor,
            this.infoColor,
            this.primaryColor,
            this.successColor,
            this.purpleColor,
            this.secondaryColor,
          ],
          borderColor: [
            this.primaryColor,
            this.secondaryColor,
            this.successColor,
            this.warningColor,
            this.dangerColor,
            this.infoColor,
            this.primaryColor,
            this.successColor,
            this.purpleColor,
            this.secondaryColor,
          ],
        },
      ],
      scatterChartType: "scatter",
    };
  }

  ngOnInit(): void {}
}
