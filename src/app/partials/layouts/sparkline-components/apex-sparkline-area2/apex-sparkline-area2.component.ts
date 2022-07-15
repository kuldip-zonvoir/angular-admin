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

const sparkLineData = [10, 50, 15, 65, 5, 74, 28, 82, 15, 90];

@Component({
  selector: "app-apex-sparkline-area2",
  templateUrl: "./apex-sparkline-area2.component.html",
  styleUrls: ["./apex-sparkline-area2.component.scss"],
})
export class ApexSparklineArea2Component implements OnInit {
  @Input() width: number;
  @Input() height: number;
  @Input("ChartColor") mycolor: string = "#ffb22b";

  colorFillable: any;

  fontFamily = "";
  colorsGrayGray500 = "";
  colorsGrayGray200 = "";
  colorsGrayGray300 = "";
  colorsThemeBaseDanger = "";
  colorsThemeBasePrimary = "";
  colorsThemeLightPrimary = "";
  colorsThemeBaseSuccess = "";
  colorsThemeLightSuccess = "";

  constructor() {
    window.Apex = {
      stroke: {
        width: 3,
        curve: "straight",
      },
      markers: {
        size: 0,
        colors: [this.colorsThemeBaseSuccess],
      },
      tooltip: {
        enabled: false,
      },
    };
    this.chartAreaSparkline3Options = {
      series: [
        {
          name: "chart-big-sparkline",
          data: this.randomizeArray(sparkLineData),
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
  ngOnInit(): void {
    this.colorFillable = {
      opacity: 0.3,
      colors: [this.mycolor],
    };

    this.setCustomCommonAreaSparlineOptions("stroke", {
      opacity: 0.3,
      colors: [this.mycolor],
    });
  }
  @ViewChild("chart") chart: ChartComponent;
  public chartAreaSparkline3Options: Partial<ChartOptions>;
  public commonAreaSparlineOptions: Partial<ChartOptions> = {
    chart: {
      type: "area",
      width: "100%",
      height: 80,
      sparkline: {
        enabled: true,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: [this.mycolor],
    },
    fill: {
      opacity: 0.3,
      colors: [this.mycolor],
    },
    yaxis: {
      min: 0,
      labels: {
        show: false,
      },
    },
  };

  setCustomCommonAreaSparlineOptions(key, value) {
    this.commonAreaSparlineOptions[key] = value;
  }
}
