import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SharemeService } from "src/app/partials/core/shareme.service";

@Component({
  selector: "app-chatlist",
  templateUrl: "./chatlist.component.html",
  styleUrls: ["./chatlist.component.scss"],
})
export class ChatlistComponent implements OnInit,OnDestroy {
  users = [
    {
      post: "Front-End-Developer",
      pic_url: "assets/media/images/users/300_9.jpg",
      user_name: "Jozef Alzari",
      time: "12:30 PM",
      recent_message: "I've done it! See your task soon..",
      notification: "5",
      status: "online",
      call_response: "missed",
      call_type: "voice",
      date: "today",
    },
    {
      post: "Front-End-Developer",
      notification: "2",
      status: "online",
      pic_url: "assets/media/images/users/300_10.jpg",
      user_name: "Peter adverd",
      time: "10:35 AM",
      recent_message: "See you soon..",
      call_response: "missed",
      call_type: "video",
      date: "today",
    },
    {
      post: "Back-End-Developer",
      notification: "4",
      status: "offline",
      pic_url: "assets/media/images/users/300_11.jpg",
      user_name: "Jozef Alzari",
      time: "12:30 PM",
      recent_message: "I've done it! See your task soon..",
      call_response: "recieved",
      call_type: "video",
      date: "yesterday",
    },
    {
      post: "Web Designer",
      notification: "1",
      status: "online",
      pic_url: "assets/media/images/users/100_11.jpg",
      user_name: "Sean Abott",
      time: "7:30 AM",
      recent_message: "Welcome to Group",
      call_response: "dial",
      call_type: "voice",
      date: "today",
    },
    {
      post: "Php Developer",
      notification: "",
      status: "online",
      pic_url: "assets/media/images/users/300_12.jpg",
      user_name: "Happy Singh",
      time: "1:30 PM",
      recent_message: "Hi how are u",
      call_response: "dial",
      call_type: "voice",
      date: "today",
    },
    {
      post: "Front-End-Developer",
      notification: "",
      status: "offline",
      pic_url: "assets/media/images/users/100_13.jpg",
      user_name: "Morney Abott",
      time: "7:30 AM",
      recent_message: "Welcome to Group",
      call_response: "recieved",
      call_type: "video",
      date: "today",
    },
    {
      post: "Android Developer",
      notification: "",
      status: "offline",
      pic_url: "assets/media/images/users/100_11.jpg",
      user_name: "Sean Abott",
      time: "7:30 AM",
      recent_message: "Welcome to Group",
      call_response: "recieved",
      call_type: "voice",
      date: "today",
    },
    {
      post: "Front-End-Developer",
      notification: "",
      status: "offline",
      pic_url: "assets/media/images/users/300_9.jpg",
      user_name: "Jozef Alzari",
      time: "12:30 PM",
      recent_message: "I've done it! See your task soon..",
      call_response: "recieved",
      call_type: "voice",
      date: "today",
    },
    {
      post: "Front-End-Developer",
      pic_url: "assets/media/images/users/300_9.jpg",
      user_name: "Jozef Alzari",
      time: "12:30 PM",
      recent_message: "I've done it! See your task soon..",
      notification: "5",
      status: "online",
      call_response: "missed",
      call_type: "voice",
      date: "today",
    },
    {
      post: "Front-End-Developer",
      notification: "2",
      status: "online",
      pic_url: "assets/media/images/users/300_10.jpg",
      user_name: "Peter adverd",
      time: "10:35 AM",
      recent_message: "See you soon..",
      call_response: "missed",
      call_type: "video",
      date: "today",
    },
    {
      post: "Back-End-Developer",
      notification: "4",
      status: "offline",
      pic_url: "assets/media/images/users/300_11.jpg",
      user_name: "Jozef Alzari",
      time: "12:30 PM",
      recent_message: "I've done it! See your task soon..",
      call_response: "recieved",
      call_type: "video",
      date: "yesterday",
    },
    {
      post: "Web Designer",
      notification: "1",
      status: "online",
      pic_url: "assets/media/images/users/100_11.jpg",
      user_name: "Sean Abott",
      time: "7:30 AM",
      recent_message: "Welcome to Group",
      call_response: "dial",
      call_type: "voice",
      date: "today",
    },
    {
      post: "Php Developer",
      notification: "",
      status: "online",
      pic_url: "assets/media/images/users/300_12.jpg",
      user_name: "Happy Singh",
      time: "1:30 PM",
      recent_message: "Hi how are u",
      call_response: "dial",
      call_type: "voice",
      date: "today",
    },
    {
      post: "Front-End-Developer",
      notification: "",
      status: "offline",
      pic_url: "assets/media/images/users/100_13.jpg",
      user_name: "Morney Abott",
      time: "7:30 AM",
      recent_message: "Welcome to Group",
      call_response: "recieved",
      call_type: "video",
      date: "today",
    },
    {
      post: "Android Developer",
      notification: "",
      status: "offline",
      pic_url: "assets/media/images/users/100_11.jpg",
      user_name: "Sean Abott",
      time: "7:30 AM",
      recent_message: "Welcome to Group",
      call_response: "recieved",
      call_type: "voice",
      date: "today",
    },
    {
      post: "Front-End-Developer",
      notification: "",
      status: "offline",
      pic_url: "assets/media/images/users/300_9.jpg",
      user_name: "Jozef Alzari",
      time: "12:30 PM",
      recent_message: "I've done it! See your task soon..",
      call_response: "recieved",
      call_type: "voice",
      date: "today",
    },
  ];
  tabId = "0";
  isChatVisible: boolean;
    subscription: Subscription;

  constructor(private _shareMe: SharemeService) {}

  ngOnInit(): void {
    this.subscription =this._shareMe.chatContent.subscribe((value) => {
      this.isChatVisible = value;
    });
  }
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  viewChat() {
    this.isChatVisible = !this.isChatVisible;
    this._shareMe.updateChatView(this.isChatVisible);
  }

    ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
