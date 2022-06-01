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

const sparkLineData = [35, 41, 35, 27, 93];
@Component({
  selector: "app-apex-sparkline",
  templateUrl: "./apex-sparkline.component.html",
  styleUrls: ["./apex-sparkline.component.scss"],
})
export class ApexSparklineComponent implements OnInit {
  @Input("ChartColor") mycolor: string = "#ffb22b";

  colorFillable: any;

  @ViewChild("chart") chart: ChartComponent;
  public chartLineSparkline1Options: Partial<ChartOptions>;
  public chartLineSparkline2Options: Partial<ChartOptions>;
  public chartLineSparkline3Options: Partial<ChartOptions>;
  public chartLineSparkline4Options: Partial<ChartOptions>;
  public commonLineSparklineOptions: Partial<ChartOptions> = {
    chart: {
      type: "line",
      height: 50,
      sparkline: {
        enabled: true,
      },
    },
    colors: ["#fed700"],
    stroke: {
      curve: "smooth",
      colors: ["#fed700"],
    },
    fill: {
      colors: ["#fed700"],
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
    this.chartLineSparkline1Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10)),
        },
      ],
    };

    this.chartLineSparkline2Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10)),
        },
      ],
    };

    this.chartLineSparkline3Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10)),
        },
      ],
    };

    this.chartLineSparkline4Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10)),
        },
      ],
    };
  }

  setCustomCommonAreaSparlineOptions(key, value) {
    this.commonLineSparklineOptions[key] = value;
  }

  ngOnInit(): void {
    this.colorFillable = {
      colors: [this.mycolor],
    };

    this.setCustomCommonAreaSparlineOptions("colors", [this.mycolor]);
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
}
