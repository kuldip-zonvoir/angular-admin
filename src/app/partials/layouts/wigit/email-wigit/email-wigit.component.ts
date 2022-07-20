import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-email-wigit",
  templateUrl: "./email-wigit.component.html",
  styleUrls: ["./email-wigit.component.scss"],
})
export class EmailWigitComponent implements OnInit {
  @Output("parentDropdown") parentDropdown: EventEmitter<any> =
    new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  readEmailMessage() {
    this.parentDropdown.emit();
    this.router.navigate(["email/read"]);
  }
}
