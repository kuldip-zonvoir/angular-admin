import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-drop-profile-wigit",
  templateUrl: "./drop-profile-wigit.component.html",
  styleUrls: ["./drop-profile-wigit.component.scss"],
})
export class DropProfileWigitComponent implements OnInit {
  @Output("parentDropdown") parentDropdown: EventEmitter<any> =
    new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToProfile() {
    this.parentDropdown.emit();
    this.router.navigate(["account/timeline"]);
  }

  goToMail() {
    this.parentDropdown.emit();
    this.router.navigate(["email/inbox"]);
  }
  goToPlans() {
    this.parentDropdown.emit();
    this.router.navigate(["special-pages/price-plans"]);
  }
  goToTasks() {
    this.parentDropdown.emit();
    this.router.navigate(["application/task-manager"]);
  }
  onLogout() {
    localStorage.removeItem("fgsdshdkfjh");
    this.router.navigate(["/auth/login-1"]);
  }
}
