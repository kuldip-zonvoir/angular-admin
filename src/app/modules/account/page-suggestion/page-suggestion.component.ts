import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-suggestion",
  templateUrl: "./page-suggestion.component.html",
  styleUrls: ["./page-suggestion.component.scss"],
})
export class PageSuggestionComponent implements OnInit {
  tabId = "";
  toggleTab(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  constructor() {}

  ngOnInit(): void {}
  addFriend(id: string) {}
  pages = [
    {
      id: "1",
      page_pic: "assets/media/images/profile/page_1.jpg",
      page_name: "The Max Cafe",
      mutual_counts: "6.2K",
      isConnected: true,
    },
    {
      id: "2",
      page_pic: "assets/media/images/profile/page_2.jpg",
      page_name: "Social Welfare",
      mutual_counts: "1.2M",
      isConnected: true,
    },
    {
      id: "3",
      page_pic: "assets/media/images/profile/page_3.jpg",
      page_name: "Zobbong.Inc",
      mutual_counts: "10K",
      isConnected: false,
    },
    {
      id: "4",
      page_pic: "assets/media/images/profile/page_4.jpg",
      page_name: "Water Planet",
      mutual_counts: "2M",
      isConnected: true,
    },
    {
      id: "5",
      page_pic: "assets/media/images/profile/page_5.jpg",
      page_name: "Ator Group LLC.",
      mutual_counts: "2.5K",
      isConnected: false,
    },
  ];
}
