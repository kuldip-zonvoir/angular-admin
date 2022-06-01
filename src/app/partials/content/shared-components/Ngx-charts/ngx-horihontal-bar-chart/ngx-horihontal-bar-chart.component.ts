import { Component, OnInit } from "@angular/core";
import { single } from "../ngx-chartdta";

@Component({
  selector: "app-ngx-horihontal-bar-chart",
  templateUrl: "./ngx-horihontal-bar-chart.component.html",
  styleUrls: ["./ngx-horihontal-bar-chart.component.scss"],
})
export class NgxHorihontalBarChartComponent implements OnInit {
  single: any[];
  view: any[] = [450, 450];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = "Country";
  showYAxisLabel: boolean = true;
  xAxisLabel: string = "Population";

  colorScheme = {
    domain: ["rgb(35, 130, 247)", "rgb(255, 90, 95)"],
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data): void {}

  onActivate(data): void {}

  onDeactivate(data): void {}

  ngOnInit(): void {}
}
