import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashbord2",
  templateUrl: "./dashbord2.component.html",
  styleUrls: ["./dashbord2.component.scss"],
})
export class Dashbord2Component implements OnInit {
  chartColor: String;
  constructor() {
    this.chartColor = "#6971fe";
  }

  ngOnInit(): void {}
}
