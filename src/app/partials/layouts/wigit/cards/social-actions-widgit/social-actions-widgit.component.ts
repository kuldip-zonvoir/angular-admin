import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-social-actions-widgit",
  templateUrl: "./social-actions-widgit.component.html",
  styleUrls: ["./social-actions-widgit.component.scss"],
})
export class SocialActionsWidgitComponent implements OnInit {
  @Input("socialWidgit") tile: any;
  constructor() {}

  ngOnInit(): void {}
}
