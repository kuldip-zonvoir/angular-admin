import { Component, OnInit } from "@angular/core";
import { Label, MultiDataSet, Color } from "ng2-charts";
import { ChartType, ChartDataSets, ChartOptions } from "chart.js";
import { ConfigService } from "src/app/partials/core/config.service";
export type ChartOption = {
  doughnutChartData: ChartDataSets[];
  doughnutChartLabels: Label[];
  doughnutChartOptions: ChartOptions;
  donutChartColors: Color[];
  doughnutChartLegend: boolean;
  doughnutChartType: ChartType;
  doughnutChartPlugins: [];
};
@Component({
  selector: "app-doughtnut-chartjs",
  templateUrl: "./doughtnut-chartjs.component.html",
  styleUrls: ["./doughtnut-chartjs.component.scss"],
})
export class DoughtnutChartjsComponent implements OnInit {
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
      doughnutChartLabels: ["Apple", "Clothes", "Cars"],
      doughnutChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                display: false,
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontWeight,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display: false,
                beginAtZero: true,
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontWeight,
              },
              gridLines: {
                display: false,
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
      doughnutChartData: [
        {
          data: [53, 30, 17],
        },
      ],
      donutChartColors: [
        {
          // primary
          backgroundColor: [
            this.primaryColor,
            this.secondaryColor,
            this.successColor,
          ],
          borderColor: [
            this.primaryColor,
            this.secondaryColor,
            this.successColor,
          ],
        },
      ],

      doughnutChartType: "doughnut",
    };
  }

  ngOnInit(): void {}
}
