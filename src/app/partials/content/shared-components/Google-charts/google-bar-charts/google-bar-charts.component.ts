import { Component, OnInit } from "@angular/core";
import { GoogleChartInterface } from "ng2-google-charts";
import { ConfigService } from "src/app/partials/core/config.service";
export type ChartOption = {
  barChart: GoogleChartInterface;
};
@Component({
  selector: "app-google-bar-charts",
  templateUrl: "./google-bar-charts.component.html",
  styleUrls: ["./google-bar-charts.component.scss"],
})
export class GoogleBarChartsComponent implements OnInit {
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
      barChart: {
        chartType: "Bar",
        dataTable: [
          ["Year", "Sales", "Expenses", "Profit"],
          ["2014", 1000, 400, 200],
          ["2015", 1170, 460, 250],
          ["2016", 660, 1120, 300],
          ["2017", 1030, 540, 350],
        ],
        options: {
          height: 300,
          width: 450,
          colors: [this.primaryColor, this.secondaryColor, this.successColor],
        },
      },
    };
  }

  ngOnInit(): void {}
}
