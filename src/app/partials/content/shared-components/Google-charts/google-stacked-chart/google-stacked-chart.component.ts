import { GoogleChartInterface } from "ng2-google-charts";
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/partials/core/config.service";
export type ChartOption = {
  stackedColumnChart: GoogleChartInterface;
};
@Component({
  selector: "app-google-stacked-chart",
  templateUrl: "./google-stacked-chart.component.html",
  styleUrls: ["./google-stacked-chart.component.scss"],
})
export class GoogleStackedChartComponent implements OnInit {
  primaryColor: string;
  secondaryColor: string;
  successColor: string;
  infoColor: string;
  warningColor: string;
  dangerColor: string;
  purpleColor: string;
  fontFamily: string;
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
    this.fontFamily = this._config.getProp("customSetting.fontFamily");
    this.chartValue = {
      stackedColumnChart: {
        chartType: "ColumnChart",
        dataTable: [
          [
            "Genre",
            "Fantasy & Sci Fi",
            "Romance",
            "Mystery/Crime",
            "General",
            "Western",
            "Literature",
            { role: "annotation" },
          ],
          ["2010", 10, 24, 20, 32, 18, 5, ""],
          ["2020", 16, 22, 23, 30, 16, 9, ""],
          ["2030", 28, 19, 29, 30, 12, 13, ""],
        ],
        options: {
          height: 300,
          width: "100%",
          colors: [
            this.primaryColor,
            this.secondaryColor,
            this.successColor,
            this.warningColor,
            this.purpleColor,
          ],
          legend: "none",
          bar: { groupWidth: "30%" },
          isStacked: true,
        },
      },
    };
  }

  ngOnInit(): void {}
}
