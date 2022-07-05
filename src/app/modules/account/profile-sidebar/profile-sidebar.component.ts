import { ActivatedRoute, Router } from "@angular/router";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-profile-sidebar",
  templateUrl: "./profile-sidebar.component.html",
  styleUrls: ["./profile-sidebar.component.scss"],
})
export class ProfileSidebarComponent implements OnInit {
  @Input() sidebarLinkId: string;
  tabId = "0";
  constructor(private route: Router, private currentRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.tabId = this.sidebarLinkId;
  }

  // open chat messages
  openChat(){
    this.route.navigate(['/chat/private-chat']);
  }


  tabToggle(tab) {
    if (this.tabId != tab) {
      this.tabId = tab;
    }
    if (tab === "0") {
      this.route.navigate(["account/edit-profile/profile-information"]);
    } else if (tab === "1") {
      this.route.navigate(["account/edit-profile/edit-information"]);
    } else if (tab === "2") {
      this.route.navigate(["account/edit-profile/change-password"]);
    } else if (tab === "3") {
      this.route.navigate(["account/edit-profile/email-setting"]);
    } else if (tab === "4") {
      this.route.navigate(["account/edit-profile/account-setting"]);
    }
  }
}
