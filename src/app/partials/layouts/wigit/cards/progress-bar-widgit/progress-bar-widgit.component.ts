import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-progress-bar-widgit",
  templateUrl: "./progress-bar-widgit.component.html",
  styleUrls: ["./progress-bar-widgit.component.scss"],
})
export class ProgressBarWidgitComponent implements OnInit {
  @Input("progressCard") tile: any;
  isTarget: boolean;
  isRecent: boolean;
  constructor() {}

  ngOnInit(): void {}
}
