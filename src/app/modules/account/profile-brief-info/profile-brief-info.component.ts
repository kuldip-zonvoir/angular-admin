import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile-brief-info",
  templateUrl: "./profile-brief-info.component.html",
  styleUrls: ["./profile-brief-info.component.scss"],
})
export class ProfileBriefInfoComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {}

  // edit Profile Information
  editProfile(){
    this.router.navigate(["account/edit-profile/edit-information"]);
  }

  // Go to Profile messages
  openMessage(){
    this.router.navigate(["email/compose"]);
  }

  openEmails(){
    this.router.navigate(["email/inbox"]);
  }
}
