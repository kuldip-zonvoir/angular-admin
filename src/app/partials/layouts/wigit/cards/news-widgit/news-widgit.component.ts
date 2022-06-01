import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-news-widgit",
  templateUrl: "./news-widgit.component.html",
  styleUrls: ["./news-widgit.component.scss"],
})
export class NewsWidgitComponent implements OnInit {
  @Input("newsWidgit") tile: any;
  constructor() {}

  ngOnInit(): void {}
}
