import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-email-wigit",
  templateUrl: "./email-wigit.component.html",
  styleUrls: ["./email-wigit.component.scss"],
})
export class EmailWigitComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  readEmailMessage() {
    this.router.navigate(["email/read"]);
  }
}
