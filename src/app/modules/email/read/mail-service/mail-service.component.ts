import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-mail-service",
  templateUrl: "./mail-service.component.html",
  styleUrls: ["./mail-service.component.scss"],
})
export class MailServiceComponent implements OnInit {
  tabId = "0";
  isHidden = false;
  constructor(private route: Router) {}

  ngOnInit(): void {}
  toggleTab(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
      console.log(this.tabId);
    }
  }
  openInbox() {
    this.route.navigate(["email/inbox"]);
  }
  composeMail() {
    this.route.navigate(["email/compose"]);
  }
}
