import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/partials/core/config.service';

@Component({
  selector: 'app-dashbord3',
  templateUrl: './dashbord3.component.html',
  styleUrls: ['./dashbord3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Dashbord3Component implements OnInit {
  inc = false;
  decr = false;
  chartColor1:String;
  chartColor2:String;
  chartColor3:String;
  chartColor4:String;
  constructor(private _config: ConfigService) {
    this.chartColor1 = this._config.getProp(
      "customSetting.colors.theme.light.purple"
    );
    this.chartColor2 = this._config.getProp(
      "customSetting.colors.theme.light.success"
    );
    this.chartColor3 = this._config.getProp(
      "customSetting.colors.theme.light.warning"
    );
    this.chartColor4 = this._config.getProp(
      "customSetting.colors.theme.light.primary"
    );
  }

  ngOnInit(): void {
  }

  donutcharts = [
    {
      series: [60, 40],
      chart: {
        type: "pie",
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
        type: "pie",
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
        type: "pie",
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
        type: "pie",
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
}
