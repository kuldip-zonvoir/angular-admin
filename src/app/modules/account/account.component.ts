import { Component, DoCheck, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
})
export class AccountComponent implements OnInit,DoCheck  {
  tabId = "0";
  editProfilePage:Boolean;
  tempArr:any;
  constructor(private route: Router) {}
  ngOnInit(): void {}

  ngDoCheck() {
    console.log('get data',this.route.url.split('/'));
    this.tempArr=this.route.url.split('/');
    if (this.tempArr.length>2&&this.tempArr[2]=='edit-profile') {
      this.editProfilePage = false;
    } else {
      this.editProfilePage = true;
    }
  }
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
