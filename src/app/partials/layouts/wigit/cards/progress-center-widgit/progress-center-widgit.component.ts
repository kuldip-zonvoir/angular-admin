import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-progress-center-widgit",
  templateUrl: "./progress-center-widgit.component.html",
  styleUrls: ["./progress-center-widgit.component.scss"],
})
export class ProgressCenterWidgitComponent implements OnInit {
  @Input("centerProgress") tile: any;
  constructor() {}

  ngOnInit(): void {}
}
