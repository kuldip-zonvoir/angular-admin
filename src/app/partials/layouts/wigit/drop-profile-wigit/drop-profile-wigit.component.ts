import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-drop-profile-wigit",
  templateUrl: "./drop-profile-wigit.component.html",
  styleUrls: ["./drop-profile-wigit.component.scss"],
})
export class DropProfileWigitComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToProfile() {
    this.router.navigate(["account/timeline"]);
  }

  goToMail() {
    this.router.navigate(["email/inbox"]);
  }
  goToPlans() {
    this.router.navigate(["special-pages/price-plans"]);
  }
  goToTasks() {
    this.router.navigate(["application/task-manager"]);
  }
}
