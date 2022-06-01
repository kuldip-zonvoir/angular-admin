import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slider } from "src/app/partials/content/shared-components/route-animations";
@Component({
  selector: "app-email",
  templateUrl: "./email.component.html",
  styleUrls: ["./email.component.scss"],
  animations: [slider],
})
export class EmailComponent implements OnInit {
  mailSidebarModal = false;
  constructor() {}

  ngOnInit(): void {}
  openAppSidebar() {
    this.mailSidebarModal = !this.mailSidebarModal;
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
