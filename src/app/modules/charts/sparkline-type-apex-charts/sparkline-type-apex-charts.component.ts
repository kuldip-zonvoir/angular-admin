import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sparkline-type-apex-charts",
  templateUrl: "./sparkline-type-apex-charts.component.html",
  styleUrls: ["./sparkline-type-apex-charts.component.scss"],
})
export class SparklineTypeApexChartsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  areacharts = [
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
  radialcharts = [
    {
      series: [35, 40, 25],
      chart: {
        type: "radialBar",
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
    {
      series: [35, 44, 15],
      chart: {
        type: "radialBar",
        height: 150,
        sparkline: {
          enabled: true,
        },
      },
      fill: {
        colors: ["#fed700", "#6c63ff", "#4ac7B0"],
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
    {
      series: [50, 25, 25],
      chart: {
        type: "radialBar",
        height: 150,
        sparkline: {
          enabled: true,
        },
      },
      fill: {
        colors: ["#fb8c00", "#745af2", "#06d79c"],
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
  piecharts = [
    {
      series: [35, 40, 25],
      chart: {
        type: "pie",
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
    {
      series: [35, 44, 15],
      chart: {
        type: "pie",
        height: 150,
        sparkline: {
          enabled: true,
        },
      },
      fill: {
        colors: ["#fed700", "#6c63ff", "#4ac7B0"],
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
    {
      series: [50, 25, 25],
      chart: {
        type: "pie",
        height: 150,
        sparkline: {
          enabled: true,
        },
      },
      fill: {
        colors: ["#fb8c00", "#745af2", "#06d79c"],
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
    {
      series: [35, 44, 15],
      chart: {
        type: "donut",
        height: 150,
        sparkline: {
          enabled: true,
        },
      },
      fill: {
        colors: ["#fed700", "#6c63ff", "#4ac7B0"],
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
    {
      series: [50, 25, 25],
      chart: {
        type: "donut",
        height: 150,
        sparkline: {
          enabled: true,
        },
      },
      fill: {
        colors: ["#fb8c00", "#745af2", "#06d79c"],
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
