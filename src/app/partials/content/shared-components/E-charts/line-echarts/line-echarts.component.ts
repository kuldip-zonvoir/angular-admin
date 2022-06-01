import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/partials/core/config.service";

@Component({
  selector: "app-line-echarts",
  templateUrl: "./line-echarts.component.html",
  styleUrls: ["./line-echarts.component.scss"],
})
export class LineEchartsComponent implements OnInit {
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
  options = {
    title: {
      show: false,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      nameTextStyle: {
        color: "#fed700",
        fontWeight: 700,
        fontSize: 20,
      },
      axisLine: {
        show: true,
      },
      axisLabel: {
        show: true,
        lineStyle: {
          color: "#fed700",
        },
      },
      axisTick: {
        show: true,
        color: "#fed700",
      },
    },
    yAxis: {
      type: "value",
      nameTextStyle: {
        color: "#fed700",
        fontWeight: 700,
        fontSize: 20,
      },
      axisLine: {
        show: true,
      },
      axisLabel: {
        show: true,
        lineStyle: {
          color: "#fed700",
        },
      },
      axisTick: {
        show: true,
        color: "#fed700",
      },
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
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
    this.fontFamily = this._config.getProp("customSetting.styles.font_family");
    this.fontWeight = this._config.getProp("customSetting.styles.font_weight");
    this.fontColor = this._config.getProp("customSetting.styles.color");
    this.fontSize = +this._config
      .getProp("customSetting.styles.font_size")
      .replace("px", "");

    let opts = [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        color: [this.primaryColor],
      },
    ];
    this.setOption("series", opts);
  }
  ngOnInit(): void {}
  setOption(key, value) {
    this.options[key] = value;
  }
}
