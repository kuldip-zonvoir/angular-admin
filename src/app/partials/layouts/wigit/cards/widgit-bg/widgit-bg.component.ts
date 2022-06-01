import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-widgit-bg",
  templateUrl: "./widgit-bg.component.html",
  styleUrls: ["./widgit-bg.component.scss"],
})
export class WidgitBgComponent implements OnInit {
  @Input("bgWidgit") tile: any;
  constructor() {}

  ngOnInit(): void {}
}
