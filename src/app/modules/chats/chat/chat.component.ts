import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SharemeService } from "src/app/partials/core/shareme.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit,OnDestroy {
  dropdownFlip = false;
  isListVisble: boolean;
  subscription: Subscription;
  constructor(private _shareMe: SharemeService) {}

  ngOnInit(): void {
    this.subscription = this._shareMe.chatContent.subscribe((value) => {
      this.isListVisble = value;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
