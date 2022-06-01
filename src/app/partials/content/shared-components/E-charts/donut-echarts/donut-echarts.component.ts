import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/partials/core/config.service";

@Component({
  selector: "app-donut-echarts",
  templateUrl: "./donut-echarts.component.html",
  styleUrls: ["./donut-echarts.component.scss"],
})
export class DonutEchartsComponent implements OnInit {
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
  ///chART OPTIONS
  chartOptions: any;
  options = {};
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
    this.chartOptions = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Sales",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "16",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Electronics" },
            { value: 735, name: "Clothes" },
            { value: 580, name: "Grossery" },
            { value: 484, name: "Footwear" },
            { value: 300, name: "Travel" },
          ],
          color: [
            this.primaryColor,
            this.secondaryColor,
            this.successColor,
            this.warningColor,
            this.purpleColor,
          ],
        },
      ],
    };
  }

  ngOnInit(): void {}
}
