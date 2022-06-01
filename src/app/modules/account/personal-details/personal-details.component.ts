import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-personal-details",
  templateUrl: "./personal-details.component.html",
  styleUrls: ["./personal-details.component.scss"],
})
export class PersonalDetailsComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
  editProfile() {
    this.route.navigate(["/account/account-information"]);
  }
}
