import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-discuss-chat",
  templateUrl: "./discuss-chat.component.html",
  styleUrls: ["./discuss-chat.component.scss"],
})
export class DiscussChatComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  discuss = [
    {
      id: "1",
      user_profile: "assets/media/images/users/100_5.jpg",
      user_name: "David Smith",
      user_message:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil, dolorem asperiores ad pariatur placeat vel fuga velit expedita adipisci? Lorem, ipsum dolor sit amet consectetur",
      createdAt: "2 days ago",
    },
    {
      id: "2",
      user_profile: "assets/media/images/users/100_6.jpg",
      user_name: "Peter Edward",
      user_message:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil, dolorem asperiores ad pariatur placeat vel fuga velit expedita adipisci? Lorem, ipsum dolor sit amet consectetur",
      createdAt: "1 days ago",
    },
    {
      id: "3",
      user_profile: "assets/media/images/users/100_7.jpg",
      user_name: "Sam Wilson",
      user_message:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil, dolorem asperiores ad pariatur placeat vel fuga velit expedita adipisci? Lorem, ipsum dolor sit amet consectetur",
      createdAt: "1 hour ago",
    },
  ];
}
