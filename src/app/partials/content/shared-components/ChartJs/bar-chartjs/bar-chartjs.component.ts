import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartType, ChartOptions } from "chart.js";
import { Label, Color } from "ng2-charts";
import { ConfigService } from "src/app/partials/core/config.service";
export type ChartOption = {
  barChartData: ChartDataSets[];
  barChartLabels: Label[];
  barChartOptions: ChartOptions;
  barChartColors: Color[];
  barChartLegend: any;
  barChartType: ChartType;
  barChartPlugins: [];
};
@Component({
  selector: "app-bar-chartjs",
  templateUrl: "./bar-chartjs.component.html",
  styleUrls: ["./bar-chartjs.component.scss"],
})
export class BarChartjsComponent implements OnInit {
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
      barChartData: [
        {
          data: [2500, 5900, 6000, 8100, 8600, 8050, 1200],
          label: "Unit A",
        },
        {
          data: [2800, 4800, 4000, 7900, 9600, 8870, 1400],
          label: "Unit B",
        },
      ],
      barChartColors: [
        {
          // dark grey
          backgroundColor: this.primaryColor,
          borderColor: this.primaryColor,
        },
        {
          // red
          backgroundColor: this.secondaryColor,
          borderColor: this.secondaryColor,
        },
      ],
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,

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
                display: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
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
      barChartLabels: ["2013", "2014", "2015", "2016", "2017", "2018"],
      barChartType: "bar",
      barChartLegend: {},

      barChartPlugins: [],
    };
  }

  ngOnInit(): void {}
  barChartData: [
    {
      data: [2500, 5900, 6000, 8100, 8600, 8050, 1200];
      label: "Unit A";
      backgroundColor: "";
      hoverBackgroundColor: "#2382f7";
    },
    {
      data: [2800, 4800, 4000, 7900, 9600, 8870, 1400];
      label: "Unit B";
      backgroundColor: "";
      hoverBackgroundColor: "#ff5a5f";
    }
  ];
  barChartOptions: {
    responsive: true;
    maintainAspectRatio: false;
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true;
          };
          gridLines: {
            display: false;
          };
        }
      ];
      yAxes: [
        {
          gridLines: {
            display: false;
          };
        }
      ];
    };
  };
  barChartLabels: ["2013", "2014", "2015", "2016", "2017", "2018"];
  barChartType: "bar";
  barChartLegend: true;
  barChartPlugins: [];
}
