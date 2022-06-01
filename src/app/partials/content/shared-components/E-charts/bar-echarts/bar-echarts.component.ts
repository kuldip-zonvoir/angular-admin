import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/partials/core/config.service";

@Component({
  selector: "app-bar-echarts",
  templateUrl: "./bar-echarts.component.html",
  styleUrls: ["./bar-echarts.component.scss"],
})
export class BarEchartsComponent implements OnInit {
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

  options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },

    legend: {
      data: ["2011", "2012"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
      nameTextStyle: {
        color: "#fed700",
        fontWeight: 700,
        fontSize: 20,
      },
    },
    yAxis: {
      type: "category",
      data: ["India", "USA", "France", "England", "Itly", "Australia"],
      nameTextStyle: {
        color: "#fed700",
        fontWeight: 700,
        fontSize: 20,
      },
      axisLabel: {
        show: true,
        lineStyle: {
          color: "#fed700",
        },
      },
      axisLine: {
        show: true,
      },
      axisTick: {
        show: true,
        color: "#fed700",
      },
    },
    series: [
      {
        color: ["rgb(35, 130, 247)"],
        name: "2011",
        type: "bar",
        data: [18203, 23489, 29034, 104970, 131744, 630230],
      },
      {
        name: "2012",
        type: "bar",
        data: [19325, 23438, 31000, 121594, 134141, 681807],
        color: ["rgb(255, 90, 95)"],
      },
    ],
  };

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
    let opts = [
      {
        color: [this.primaryColor],
        name: "2011",
        type: "bar",
        data: [18203, 23489, 29034, 104970, 131744, 630230],
      },
      {
        name: "2012",
        type: "bar",
        data: [19325, 23438, 31000, 121594, 134141, 681807],
        color: [this.secondaryColor],
      },
    ];
    this.setOptions("series", opts);
  }

  ngOnInit(): void {}

  setOptions(key, value) {
    this.options[key] = value;
  }
}
