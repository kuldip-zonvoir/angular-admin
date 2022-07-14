import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/partials/core/config.service";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
})
export class AnalyticsComponent implements OnInit {
  uncheckableRadioModel = "Middle";
  radioModel = "year";
  chartColor = "";
  chartColor1 = "";
  chartColor2 = "";
  chartColor3 = "";
  constructor(private _config: ConfigService) {
    this.chartColor = this._config.getProp(
      "customSetting.colors.theme.light.success"
    );
    this.chartColor1 = this._config.getProp(
      "customSetting.colors.theme.light.primary"
    );
    this.chartColor2 = this._config.getProp(
      "customSetting.colors.theme.light.secondary"
    );
    this.chartColor3 = this._config.getProp(
      "customSetting.colors.theme.light.warning"
    );
  }
  donutcharts = [
    {
      series: [60, 40],
      chart: {
        type: "donut",
        height: 150,
        sparkline: {
          enabled: true,
        },
      },
      fill: {
        colors: ["#5febc8", "#eb795f"],
      },

      labels: ["Product A", "Product B"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  ];
  donutcharts1 = [
    {
      series: [75, 25],
      chart: {
        type: "donut",
        height: 150,
        sparkline: {
          enabled: true,
        },
      },
      fill: {
        colors: ["#6064f2", "#ec4899"],
      },

      labels: ["Product A", "Product B"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  ];
  donutcharts2 = [
    {
      series: [60, 40],
      chart: {
        type: "donut",
        height: 150,
        sparkline: {
          enabled: true,
        },
      },
      fill: {
        colors: ["#e633ddd0", "#5feb6de7"],
      },

      labels: ["Product A", "Product B"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  ];
  donutcharts3 = [
    {
      series: [80, 20],
      chart: {
        type: "donut",
        height: 150,
        sparkline: {
          enabled: true,
        },
      },
      fill: {
        colors: ["#06d79c", "#6971ff"],
      },

      labels: ["Product A", "Product B"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
