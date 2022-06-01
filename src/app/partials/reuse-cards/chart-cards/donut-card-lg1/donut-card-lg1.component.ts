import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-donut-card-lg1",
  templateUrl: "./donut-card-lg1.component.html",
  styleUrls: ["./donut-card-lg1.component.scss"],
})
export class DonutCardLg1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  charts = [
    {
      name: "serviced",
      total: 10200,
      chartOptions: {
        series: [35, 40, 25],
        chart: {
          type: "donut",
          height: 150,
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#F44336", "#E91E63", "#9C27B0"],
        fill: {
          colors: ["#F44336", "#E91E63", "#9C27B0"],
        },
        dataLabels: {
          style: {
            color: ["#F44336", "#E91E63", "#9C27B0"],
          },
        },
        markers: {
          color: ["#F44336", "#E91E63", "#9C27B0"],
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
      icon: "fa fa-gear",
    },
  ];
}
