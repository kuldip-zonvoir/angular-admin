import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-browser-statics",
  templateUrl: "./browser-statics.component.html",
  styleUrls: ["./browser-statics.component.scss"],
})
export class BrowserStaticsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  donutcharts = [
    {
      series: [35, 40, 25],
      chart: {
        type: "donut",
        height: 150,
        sparkline: {
          enabled: true,
        },
      },
      fill: {
        colors: ["#06d79c", "#6971ff", "#e05d6f"],
      },

      labels: ["Product A", "Product B", "Product C"],
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
