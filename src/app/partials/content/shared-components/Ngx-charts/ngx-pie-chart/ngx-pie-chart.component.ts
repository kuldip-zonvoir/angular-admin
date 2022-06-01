import { Component, OnInit } from "@angular/core";
import { single } from "../ngx-chartdta";

@Component({
  selector: "app-ngx-pie-chart",
  templateUrl: "./ngx-pie-chart.component.html",
  styleUrls: ["./ngx-pie-chart.component.scss"],
})
export class NgxPieChartComponent implements OnInit {
  single: any[];
  view: any[] = [500, 450];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ["rgb(35, 130, 247)", "rgb(255, 90, 95)", "rgb(6, 215, 156)"],
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data): void {}

  onActivate(data): void {}

  onDeactivate(data): void {}

  ngOnInit() {}
}
