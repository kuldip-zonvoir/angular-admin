import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashbord1",
  templateUrl: "./dashbord1.component.html",
  styleUrls: ["./dashbord1.component.scss"],
})
export class Dashbord1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  donutcharts = [
    {
      series: [30, 25, 15, 20, 10],
      chart: {
        type: "donut",
        height: 200,
        sparkline: {
          enabled: true,
        },
      },
      fill: {
        colors: ["#4aebc8", "#eb795f", "#6971ff", "#e8035f", "#9fbbc8"],
      },

      labels: ["Not started", "Started", "Completed", "Pending", "On Hold"],
    },
  ];
}
