import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-tile-widgit",
  templateUrl: "./dashboard-tile-widgit.component.html",
  styleUrls: ["./dashboard-tile-widgit.component.scss"],
})
export class DashboardTileWidgitComponent implements OnInit {
  @Input("dashboardWidgit") tile: any;
  constructor() {}

  ngOnInit(): void {}
}
