import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartType, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
import { ConfigService } from "src/app/partials/core/config.service";
export type ChartOption = {
  polarChartData: ChartDataSets[];
  polarChartLabels: Label[];
  polarChartOptions: ChartOptions;
  polarChartColors: Color[];
  polarChartLegend: boolean;
  polarChartType: ChartType;
  polarChartPlugins: [];
};
@Component({
  selector: "app-polar-area-chartjs",
  templateUrl: "./polar-area-chartjs.component.html",
  styleUrls: ["./polar-area-chartjs.component.scss"],
})
export class PolarAreaChartjsComponent implements OnInit {
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
      polarChartData: [
        {
          label: "My First Dataset",
          data: [11, 16, 7, 3, 14],
        },
      ],

      //Labels shown on the x-axis
      polarChartLabels: ["Sale", "Revenue", "Cost", "Profit", "Saving"],

      // Define chart options
      polarChartOptions: {
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
      polarChartColors: [
        {
          // primary
          backgroundColor: [
            this.primaryColor,
            this.secondaryColor,
            this.successColor,
            this.warningColor,
            this.purpleColor,
          ],
          borderColor: [this.primaryColor, this.secondaryColor],
        },
      ],

      // Set true to show legends
      polarChartLegend: true,

      // Define type of chart
      polarChartType: "polarArea",

      polarChartPlugins: [],
    };
  }
  // Array of different segments in chart

  // events
  chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
    
  }

  chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
    
  }
  ngOnInit(): void {}
}
