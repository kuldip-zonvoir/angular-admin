import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-overview-wrapper',
  templateUrl: './profile-overview-wrapper.component.html',
  styleUrls: ['./profile-overview-wrapper.component.scss']
})
export class ProfileOverviewWrapperComponent implements OnInit {
  tabId = "0";
  constructor(private route: Router) {}

  ngOnInit(): void {}
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
