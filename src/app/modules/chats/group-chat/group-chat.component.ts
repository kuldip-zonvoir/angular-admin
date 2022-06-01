import { Component, OnInit } from "@angular/core";
import { SharemeService } from "src/app/partials/core/shareme.service";

@Component({
  selector: "app-group-chat",
  templateUrl: "./group-chat.component.html",
  styleUrls: ["./group-chat.component.scss"],
})
export class GroupChatComponent implements OnInit {
  dropdownFlip = false;
  isListVisble: boolean;

  constructor(private _shareMe: SharemeService) {}

  dropdownToggle() {
    this.dropdownFlip = !this.dropdownFlip;
  }
  clickOutside() {
    this.dropdownFlip = false;
  }

  ngOnInit(): void {
    this._shareMe.chatContent.subscribe((value) => {
      this.isListVisble = value;
      console.log(this.isListVisble);
    });
  }
}
