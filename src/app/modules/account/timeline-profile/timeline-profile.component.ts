import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-timeline-profile",
  templateUrl: "./timeline-profile.component.html",
  styleUrls: ["./timeline-profile.component.scss"],
})
export class TimelineProfileComponent implements OnInit {
  tabId = "";
  @Input() post: any;
  constructor() {}

  ngOnInit(): void {}
  toggleTab(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
}
