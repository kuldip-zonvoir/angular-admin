import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header-profile",
  templateUrl: "./header-profile.component.html",
  styleUrls: ["./header-profile.component.scss"],
})
export class HeaderProfileComponent implements OnInit {
  @Input() activeId: any;
  tabId = "3";
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.tabId = this.activeId;
  }
  tabToggle(tab) {
    if (this.tabId != tab) {
      this.tabId = tab;
    }
    if (tab === "0") {
      this.route.navigate(["account/timeline"]);
    } else if (tab === "1") {
      this.route.navigate(["account/friend-list"]);
    } else if (tab === "2") {
      this.route.navigate(["account/photos"]);
    } else if (tab === "3") {
      this.route.navigate(["account/profile-information"]);
    }
  }
}
