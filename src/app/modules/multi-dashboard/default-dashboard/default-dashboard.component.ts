import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-default-dashboard",
  templateUrl: "./default-dashboard.component.html",
  styleUrls: ["./default-dashboard.component.scss"],
})
export class DefaultDashboardComponent implements OnInit {
  inc = false;
  decr = false;
  isResponsive: boolean;
  dropdown: boolean;
  constructor() {}

  ngOnInit(): void {}
  changeWidth(event) {
    this.isResponsive = event;
  }

  Tiles = [
    {
      title: "Total Customers",
      value: "3,376",
      variation: "5.6",
    },
    {
      title: "Total Orders",
      value: "5,776",
      variation: "6.6",
    },
    {
      title: "Total Stocks",
      value: "8,639",
      variation: "2.6",
    },
    {
      title: "Total Comments",
      value: "8,246",
      variation: "5.4",
    },
  ];

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
        colors: ["#F44336", "#E91E63", "#9C27B0"],
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
