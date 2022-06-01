import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexYAxis,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any;
  stroke: any;
  yaxis: ApexYAxis | ApexYAxis[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  colors: string[];
  labels: string[] | number[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

declare global {
  interface Window {
    Apex: any;
  }
}

const sparkLineData = [47, 45, 41, 43, 19, 46, 35, 48, 41, 43, 29, 50];
@Component({
  selector: "app-apex-spark-bar",
  templateUrl: "./apex-spark-bar.component.html",
  styleUrls: ["./apex-spark-bar.component.scss"],
})
export class ApexSparkBarComponent implements OnInit {
  @Input("ChartColor") mycolor: string = "#ffb22b";

  colorFillable: any;

  @ViewChild("chart") chart: ChartComponent;
  public chartBarSparkline1Options: Partial<ChartOptions>;
  public chartBarSparkline2Options: Partial<ChartOptions>;
  public chartBarSparkline3Options: Partial<ChartOptions>;
  public chartBarSparkline4Options: Partial<ChartOptions>;
  public commonBarSparklineOptions: Partial<ChartOptions> = {
    chart: {
      type: "bar",
      height: 80,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "80%",
      },
    },
    stroke: {
      width: 3,
    },
    markers: {
      size: 0,
    },
    colors: [this.mycolor],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.5,
        type: "horizontal",
        gradientToColors: ["#fed700", "#6c63ff"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
  constructor() {
    // setting global apex options which are applied on all charts on the page
    window.Apex = {};
    this.chartBarSparkline1Options = {
      series: [
        {
          name: "chart-bar-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10)),
        },
      ],
    };

    this.chartBarSparkline2Options = {
      series: [
        {
          name: "chart-bar-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10)),
        },
      ],
    };

    this.chartBarSparkline3Options = {
      series: [
        {
          name: "chart-bar-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10)),
        },
      ],
    };

    this.chartBarSparkline4Options = {
      series: [
        {
          name: "chart-bar-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10)),
        },
      ],
    };
  }
  public randomizeArray(arg): number[] {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  setCustomCommonAreaSparlineOptions(key, value) {
    this.commonBarSparklineOptions[key] = value;
  }

  ngOnInit(): void {
    this.colorFillable = {
      colors: [this.mycolor],
    };

    this.setCustomCommonAreaSparlineOptions("colors", {
      colors: [this.mycolor],
    });
  }
}
