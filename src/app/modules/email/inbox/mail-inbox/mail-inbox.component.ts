import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-mail-inbox",
  templateUrl: "./mail-inbox.component.html",
  styleUrls: ["./mail-inbox.component.scss"],
})
export class MailInboxComponent implements OnInit {
  tabId = "0";

  constructor(public route: Router) {}

  ngOnInit(): void {}
  toggleTab(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  //open mail detail
  openMessage() {
    this.route.navigate(["email/read"]);
  }
  emails = [
    {
      id: 1,
      user: "Sean Jeimeson",
      message: "Hello, i reached office",
      date: "5 Aug",
      star: false,
    },
    {
      id: 2,
      user: "David Convoye",
      message: "Congratulation, you selected ....",
      date: "2 Aug",
      star: true,
    },
    {
      id: 3,
      user: "David Convoye",
      message: "Congratulation, you selected ....",
      date: "2 Aug",
      star: false,
    },
    {
      id: 4,
      user: "Morgan Richardson",
      message: "Hello, i reached home",
      date: "20 July",
      star: false,
    },
    {
      id: 5,
      user: "Kane Richardson",
      message: "Meeting is at 3:30 PM",
      date: "28 July",
      star: false,
    },

    {
      id: 6,
      user: "Morgan Richardson",
      message: "Hello, i reached home",
      date: "30 July",
      star: true,
    },
    {
      id: 7,
      user: "Sean Jeimeson",
      message: "Hello, i reached office",
      date: "5 Aug",
      star: false,
    },
    {
      id: 8,
      user: "David Convoye",
      message: "Congratulation, you selected ....",
      date: "2 Aug",
      star: true,
    },
    {
      id: 9,
      user: "David Convoye",
      message: "Congratulation, you selected ....",
      date: "2 Aug",
      star: false,
    },
    {
      id: 10,
      user: "Morgan Richardson",
      message: "Hello, i reached home",
      date: "20 July",
      star: false,
    },
    {
      id: 11,
      user: "Kane Richardson",
      message: "Meeting is at 3:30 PM",
      date: "28 July",
      star: false,
    },

    {
      id: 12,
      user: "Morgan Richardson",
      message: "Hello, i reached home",
      date: "30 July",
      star: true,
    },
  ];
}
