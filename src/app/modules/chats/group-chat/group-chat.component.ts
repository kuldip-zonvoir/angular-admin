import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SharemeService } from "src/app/partials/core/shareme.service";

@Component({
  selector: "app-group-chat",
  templateUrl: "./group-chat.component.html",
  styleUrls: ["./group-chat.component.scss"],
})
export class GroupChatComponent implements OnInit,OnDestroy {
  dropdownFlip = false;
  isListVisble: boolean;
    subscription: Subscription;

  constructor(private _shareMe: SharemeService) {}

  dropdownToggle() {
    this.dropdownFlip = !this.dropdownFlip;
  }
  clickOutside() {
    this.dropdownFlip = false;
  }

  ngOnInit(): void {
    this.subscription = this._shareMe.chatContent.subscribe((value) => {
      this.isListVisble = value;
      console.log(this.isListVisble);
    });
  }

    ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
