import { GoogleChartInterface } from "ng2-google-charts";
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/partials/core/config.service";
export type ChartOption = {
  scatterChart: GoogleChartInterface;
};
@Component({
  selector: "app-google-scatter-chart",
  templateUrl: "./google-scatter-chart.component.html",
  styleUrls: ["./google-scatter-chart.component.scss"],
})
export class GoogleScatterChartComponent implements OnInit {
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
      scatterChart: {
        chartType: "ScatterChart",
        dataTable: [
          ["Age", "Weight"],
          [8, 12],
          [4, 5.5],
          [11, 14],
          [4, 5],
          [3, 3.5],
          [6.5, 7],
        ],
        options: {
          height: 300,
          width: "100%",
          colors: [this.primaryColor],
          legend: "none",
          hAxis: { title: "Age", minValue: 0, maxValue: 15 },
          vAxis: { title: "Weight", minValue: 0, maxValue: 15 },
        },
      },
    };
  }

  ngOnInit(): void {}
}
