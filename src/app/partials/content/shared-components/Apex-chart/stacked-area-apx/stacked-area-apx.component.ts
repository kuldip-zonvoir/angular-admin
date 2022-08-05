import { Component, ViewChild, OnInit } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
} from "ng-apexcharts";
import { ConfigService } from "src/app/partials/core/config.service";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  colors: string[];
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: "app-stacked-area-apx",
  templateUrl: "./stacked-area-apx.component.html",
  styleUrls: ["./stacked-area-apx.component.scss"],
})
export class StackedAreaApxComponent implements OnInit {
  primaryColor: string;
  secondaryColor: string;
  successColor: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  fontColor: string;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private _config: ConfigService) {
    this.primaryColor = this._config.getProp(
      "customSetting.colors.theme.light.primary"
    );
    this.successColor = this._config.getProp(
      "customSetting.colors.theme.light.secondary"
    );
    this.fontFamily = this._config.getProp("customSetting.styles.font_family");
    this.fontWeight = this._config.getProp("customSetting.styles.font_weight");
    this.fontColor = this._config.getProp("customSetting.styles.color");
    this.fontSize = this._config.getProp("customSetting.styles.font_size");
    this.chartOptions = {
      series: [
        {
          name: "Team A",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: "Team B",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            {
              min: 10,
              max: 20,
            }
          ),
        },
      ],
      chart: {
        type: "area",
        width: "100%",
        height: 300,
        stacked: true,
        fontFamily: this.fontFamily,
        events: {
         
          mounted: (chart) => {
            chart.windowResizeHandler();
          }
        },
      
        toolbar: {
          show: false,
          tools: {
            download: false,
          },
        },
      },
      colors: [this.primaryColor, this.secondaryColor],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        },
      },
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        fontSize: this.fontSize,
        fontFamily: this.fontFamily,
        fontWeight: this.fontWeight,
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontWeight: this.fontWeight,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontWeight: this.fontWeight,
          },
        },
      },
    };
  }

  public generateDayWiseTimeSeries = function (baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  };
  ngOnInit(): void {}
}
