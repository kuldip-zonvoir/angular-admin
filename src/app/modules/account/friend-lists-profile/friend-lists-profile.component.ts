import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-friend-lists-profile",
  templateUrl: "./friend-lists-profile.component.html",
  styleUrls: ["./friend-lists-profile.component.scss"],
})
export class FriendListsProfileComponent implements OnInit {
  tabId = "";
  toggleTab(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  constructor() {}

  ngOnInit(): void {}
  addFriend(id: string) {}
  friends = [
    {
      id: "1",
      friend_pic: "assets/media/images/users/1.png",
      friend_name: "Jack Wilson",
      mutual_counts: "6",
      isConnected: true,
    },
    {
      id: "2",
      friend_pic: "assets/media/images/users/2.png",
      friend_name: "Ketty Lang",
      mutual_counts: "12",
      isConnected: true,
    },
    {
      id: "3",
      friend_pic: "assets/media/images/users/3.png",
      friend_name: "Nazanin Lang",
      mutual_counts: "10",
      isConnected: false,
    },
    {
      id: "4",
      friend_pic: "assets/media/images/users/4.png",
      friend_name: "Benjamin Aramayo",
      mutual_counts: "20",
      isConnected: true,
    },
    {
      id: "5",
      friend_pic: "assets/media/images/users/5.png",
      friend_name: "Martin Taylor",
      mutual_counts: "20",
      isConnected: false,
    },
  ];
}
