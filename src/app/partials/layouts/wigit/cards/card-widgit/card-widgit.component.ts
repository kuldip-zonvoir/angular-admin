import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-widgit",
  templateUrl: "./card-widgit.component.html",
  styleUrls: ["./card-widgit.component.scss"],
})
export class CardWidgitComponent implements OnInit {
  @Input("basicCard") tile: any;
  constructor() {}

  ngOnInit(): void {}
}
