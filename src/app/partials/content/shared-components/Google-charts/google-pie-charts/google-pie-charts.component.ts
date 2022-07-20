import { Component, OnInit } from "@angular/core";
import { GoogleChartInterface } from "ng2-google-charts";
import { ConfigService } from "src/app/partials/core/config.service";
export type ChartOption = {
  pieChart: GoogleChartInterface;
};
@Component({
  selector: "app-google-pie-charts",
  templateUrl: "./google-pie-charts.component.html",
  styleUrls: ["./google-pie-charts.component.scss"],
})
export class GooglePieChartsComponent implements OnInit {
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
      pieChart: {
        chartType: "PieChart",
        dataTable: [
          ["Task", "Hours per Day"],
          ["Work", 11],
          ["Eat", 2],
          ["Commute", 2],
          ["Watch TV", 2],
          ["Sleep", 7],
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
        },
      },
    };
  }

  ngOnInit(): void {}
}
