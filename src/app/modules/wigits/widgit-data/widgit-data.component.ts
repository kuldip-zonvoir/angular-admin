import { Component, OnInit } from "@angular/core";
import { FakeApiService } from "src/app/partials/core/fake_api.service";

@Component({
  selector: "app-widgit-data",
  templateUrl: "./widgit-data.component.html",
  styleUrls: ["./widgit-data.component.scss"],
})
export class WidgitDataComponent implements OnInit {
  Contacts = [];
  constructor(private _apiService: FakeApiService) {}

  ngOnInit(): void {
    this.Contacts = this._apiService.getContacts().slice(0, 4);
  }
  dashboardWidgit = [
    {
      id: "1",
      icon_name: "monetization_on",
      title: "Tax ",
      value: "9,347",
      isUpgrade: true,
      update_data: "320",
      color: "secondary",
    },
    {
      id: "2",
      icon_name: "savings",
      title: "Savings ",
      value: "10,752",
      isUpgrade: false,
      update_data: "500",
      color: "success",
    },
    {
      id: "3",
      icon_name: "leaderboard",
      title: "Revenue",
      value: "7,352",
      isUpgrade: false,
      update_data: "351",
      color: "info",
    },
    {
      id: "4",
      icon_name: "shopping_cart",
      title: "Products ",
      value: "3,769",
      isUpgrade: true,
      update_data: "1000",
      color: "purple",
    },
  ];
  centerProgressWidgit = [
    {
      id: "1",
      title: "Total Expenditure ",
      value: "2,367",
      isUpgrade: true,
      update_data: "20",
      bar_color: "secondary",
    },
    {
      id: "2",
      title: "Total Savings ",
      value: "5,752",
      isUpgrade: false,
      update_data: "50",
      bar_color: "danger",
    },
    {
      id: "3",
      title: "Total Members",
      value: "6,309",
      isUpgrade: false,
      update_data: "35",
      bar_color: "info",
    },
    {
      id: "4",
      title: "Total Partners ",
      value: "1,752",
      isUpgrade: true,
      update_data: "10",
      bar_color: "success",
    },
  ];
  cardWidgits = [
    {
      id: "1",
      card_image: "assets/media/images/cards/7.jpg",
      date: "15 March 2021",
      comments: "10",
      title: "Virus is now under control",
      content:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: "2",
      card_image: "assets/media/images/cards/6.jpg",
      date: "10 March 2021",
      comments: "20",
      title: "Vaccine is Safe",
      content:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: "1",
      card_image: "assets/media/images/cards/4.jpg",
      date: "15 April 2021",
      comments: "5",
      title: "Project is Ready",
      content:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ];
  progressbarTile = [
    {
      title: "Total Sales",
      value: "520",
      bar_color: "primary",
      bar_value: "60",
      isTarget: true,
      isRecent: false,
      target_set: "0.5",
      target_achieved: "0.2",
    },
    {
      title: "Total Revenue",
      value: "940",
      bar_color: "secondary",
      bar_value: "80",
      isTarget: false,
      isRecent: true,
      target_set: "0.8",
      target_achieved: "1.2",
    },
    {
      title: "Total Expenditure",
      value: "480",
      bar_color: "danger",
      bar_value: "30",
      isTarget: true,
      isRecent: false,
      target_set: "0.7",
      target_achieved: "0.5",
    },
    {
      title: "Total Profit",
      value: "940",
      bar_color: "success",
      bar_value: "70",
      isTarget: false,
      isRecent: true,
      target_set: "2.0",
      target_achieved: "2.5",
    },
  ];
  bgTile = [
    {
      title: "Bills",
      value: "3,520",
      icon_name: "ti-receipt",
      bg_color: "primary",
    },
    {
      title: "Invoice",
      value: "4,550",
      icon_name: "ti-notepad",
      bg_color: "warning",
    },
    {
      title: "Revenue",
      value: "6,321",
      icon_name: "ti-wallet",
      bg_color: "danger",
    },
    {
      title: "Sales",
      value: "1,120",
      icon_name: "ti-stats-down",
      bg_color: "success",
    },
  ];
  socialList = [
    {
      icon_name: "ti-thumb-up",
      color: "purple",
      title: "Like",
      new_value: "200",
      all_value: "1,520",
    },
    {
      icon_name: "ti-comment",
      color: "success",
      title: "Comment",
      new_value: "350",
      all_value: "1,820",
    },
    {
      icon_name: "ti-share",
      color: "warning",
      title: "Share",
      new_value: "200",
      all_value: "1,520",
    },
    {
      icon_name: "ti-user",
      color: "danger",
      title: "Subscriber",
      new_value: "150",
      all_value: "2,380",
    },
  ];
  newsData = [
    {
      icon_name: "ti-world",
      news_date: "25 July 2021",
      news_title: "Top 5 news of indian express",
      news_btn_color: "secondary",
      bg_color: "info",
    },
    {
      icon_name: "ti-apple",
      news_date: "5 March 2021",
      news_title: "Apple growth rate increased by 3.8%",
      news_btn_color: "secondary",
      bg_color: "danger",
    },
    {
      icon_name: "ti-skype",
      news_date: "16 May 2021",
      news_title: "Skype got placed in Top 10 MNC",
      news_btn_color: "secondary",
      bg_color: "purple",
    },
    {
      icon_name: "ti-apple",
      news_date: "30 June 2021",
      news_title: "Wordpress Added New Feature",
      news_btn_color: "secondary",
      bg_color: "success",
    },
  ];
}
