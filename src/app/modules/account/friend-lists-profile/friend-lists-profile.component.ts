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
      friend_pic: "assets/media/images/users/100_1.jpg",
      friend_name: "Jack Wilson",
      mutual_counts: "6",
      isConnected: true,
    },
    {
      id: "2",
      friend_pic: "assets/media/images/users/100_2.jpg",
      friend_name: "Denial Sam",
      mutual_counts: "12",
      isConnected: true,
    },
    {
      id: "3",
      friend_pic: "assets/media/images/users/100_3.jpg",
      friend_name: "Teed Richards",
      mutual_counts: "10",
      isConnected: false,
    },
    {
      id: "4",
      friend_pic: "assets/media/images/users/100_4.jpg",
      friend_name: "Selvie",
      mutual_counts: "20",
      isConnected: true,
    },
    {
      id: "5",
      friend_pic: "assets/media/images/users/100_5.jpg",
      friend_name: "Martin Taylor",
      mutual_counts: "20",
      isConnected: false,
    },
  ];
}
