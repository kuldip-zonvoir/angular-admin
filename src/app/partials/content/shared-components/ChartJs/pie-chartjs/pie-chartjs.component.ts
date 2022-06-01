import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartDataSets, ChartType } from "chart.js";
import { Label, Color } from "ng2-charts";
import { ConfigService } from "src/app/partials/core/config.service";
export type ChartOption = {
  pieChartData: ChartDataSets[];
  pieChartLabels: Label[];
  pieChartOptions: ChartOptions;
  pieChartColors: Color[];
  pieChartLegend: boolean;
  pieChartType: ChartType;
  pieChartPlugins: [];
};
@Component({
  selector: "app-pie-chartjs",
  templateUrl: "./pie-chartjs.component.html",
  styleUrls: ["./pie-chartjs.component.scss"],
})
export class PieChartjsComponent implements OnInit {
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
      pieChartOptions: {
        responsive: true,

        tooltips: {
          enabled: true,
          mode: "single",
          bodyFontSize: this.fontSize,
          callbacks: {
            label: function (tooltipItems, data) {
              return data.datasets[0].data[tooltipItems.index] + " %";
            },
          },
        },
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

      pieChartLabels: ["Category 1", "Category 2", "Category 3", "Category 4"],

      pieChartData: [
        {
          data: [78.09, 20.95, 0.93, 0.03],
        },
      ],

      pieChartType: "pie",

      pieChartLegend: true,

      pieChartPlugins: [],

      pieChartColors: [
        {
          hoverBackgroundColor: [
            this.primaryColor,
            this.secondaryColor,
            this.successColor,
            this.purpleColor,
          ],
          backgroundColor: [
            this.primaryColor,
            this.secondaryColor,
            this.successColor,
            this.purpleColor,
          ],
        },
      ],
    };
  }

  ngOnInit(): void {}
}
