import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/partials/core/config.service";

@Component({
  selector: "app-pie-echarts",
  templateUrl: "./pie-echarts.component.html",
  styleUrls: ["./pie-echarts.component.scss"],
})
export class PieEchartsComponent implements OnInit {
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
    legend: {
      orient: "horizontal",
      type: "scroll",
      // right: 10,
      // top: ,
      bottom: 20,
    },

    series: [
      {
        name: "sports",
        type: "pie",
        radius: [50, 250],
        center: ["50%", "50%"],
        roseType: "area",
        label: {
          show: false,
        },
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: 40, name: "rose 1" },
          { value: 38, name: "rose 2" },
          { value: 32, name: "rose 3" },
          { value: 30, name: "rose 4" },
          { value: 28, name: "rose 5" },
          { value: 26, name: "rose 6" },
          { value: 22, name: "rose 7" },
        ],
        color: [
          "rgb(35, 130, 247)",
          "rgb(255, 90, 95)",
          "rgb(6, 215, 156)",
          "rgb(255, 178, 43)",
          "rgb(224, 93, 111)",
          "rgb(116, 90, 242)",
          "rgb(251, 79, 0)",
        ],
      },
    ],
    // media query for e-chart
    media: [
      // each rule of media query is defined here
      {
        query: {
          minWidth: 200,
          maxHeight: 300,
          minAspectRatio: 1.3,
        },
        option: {
          // write options accordingly
          legend: {
            show: false,
            orient: "horizontal",
            type: "scroll",
            bottom: 0,
          },
        },
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
        name: "sports",
        type: "pie",
        radius: [30, 150],
        center: ["50%", "50%"],
        roseType: "area",
        label: {
          show: false,
        },
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: 40, name: "rose 1" },
          { value: 38, name: "rose 2" },
          { value: 32, name: "rose 3" },
          { value: 30, name: "rose 4" },
          { value: 28, name: "rose 5" },
          { value: 26, name: "rose 6" },
          { value: 22, name: "rose 7" },
        ],
        color: [
          this.primaryColor,
          this.secondaryColor,
          this.successColor,
          this.purpleColor,
          this.warningColor,
          this.infoColor,
          this.dangerColor,
        ],
        // media query for e-chart
        media: [
          // each rule of media query is defined here
          {
            query: {
              minWidth: 200,
              maxHeight: 300,
              minAspectRatio: 1.3,
            },
            option: {
              // write options accordingly
              legend: {
                show: false,
                orient: "horizontal",
                type: "scroll",
                bottom: 0,
              },
            },
          },
        ],
      },
    ];

    this.setOptions("series", opts);
  }

  ngOnInit(): void {}
  setOptions(key, value) {
    this.options[key] = value;
  }
}
