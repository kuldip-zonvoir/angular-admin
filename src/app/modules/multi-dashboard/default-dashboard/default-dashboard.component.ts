import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-default-dashboard",
  templateUrl: "./default-dashboard.component.html",
  styleUrls: ["./default-dashboard.component.scss"],
})
export class DefaultDashboardComponent implements OnInit {
  inc = false;
  decr = false;
  constructor() {}

  ngOnInit(): void {}
}
