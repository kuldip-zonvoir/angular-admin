import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timeline-wrapper-account",
  templateUrl: "./timeline-wrapper-account.component.html",
  styleUrls: ["./timeline-wrapper-account.component.scss"],
})
export class TimelineWrapperAccountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  posts = [
    {
      id: "1",
      user_pic: "assets/media/images/users/100_5.jpg",
      user_name: "David Smith",
      post_date: "just now",
      post_content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, incidunt.",
      post_file: "assets/media/images/profile/post_1.jpg",
      post_likes: "120",
      post_comments: "53",
      post_share: "10",
    },
    {
      id: "2",
      user_pic: "assets/media/images/users/100_6.jpg",
      user_name: "David Smith",
      post_date: "5 min ago",
      post_content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, incidunt.",
      post_file: "assets/media/images/profile/post_3.jpg",
      post_likes: "140",
      post_comments: "20",
      post_share: "10",
    },
    {
      id: "3",
      user_pic: "assets/media/images/users/100_5.jpg",
      user_name: "David Smith",
      post_date: "20 min ago",
      post_content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, incidunt.",
      post_file: "assets/media/images/profile/post_2.jpg",
      post_likes: "180",
      post_comments: "100",
      post_share: "30",
    },
  ];
}
