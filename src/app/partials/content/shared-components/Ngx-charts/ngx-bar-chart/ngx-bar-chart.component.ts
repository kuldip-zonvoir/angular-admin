import { Component, OnInit } from "@angular/core";
import { single } from "../ngx-chartdta";

@Component({
  selector: "app-ngx-bar-chart",
  templateUrl: "./ngx-bar-chart.component.html",
  styleUrls: ["./ngx-bar-chart.component.scss"],
})
export class NgxBarChartComponent implements OnInit {
  single: any[];
  multi: any[];
  view: any[] = [450, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  xAxisLabel = "Country";
  yAxisLabel = "Population";

  colorScheme = {
    domain: ["rgb(35, 130, 247)", "rgb(255, 90, 95)"],
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {}

  ngOnInit(): void {}
}
