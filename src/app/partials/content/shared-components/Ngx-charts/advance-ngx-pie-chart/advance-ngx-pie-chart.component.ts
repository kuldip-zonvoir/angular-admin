import { Component, OnInit } from "@angular/core";
import { single } from "../ngx-chartdta";

@Component({
  selector: "app-advance-ngx-pie-chart",
  templateUrl: "./advance-ngx-pie-chart.component.html",
  styleUrls: ["./advance-ngx-pie-chart.component.scss"],
})
export class AdvanceNgxPieChartComponent implements OnInit {
  single: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ["#3699FF", "#06d79c", "#ef5350", "#ffb22b"],
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data): void {}

  onActivate(data): void {}

  onDeactivate(data): void {}

  ngOnInit() {}
}
