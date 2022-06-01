import { Component, OnInit } from "@angular/core";
import { SharemeService } from "src/app/partials/core/shareme.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit {
  dropdownFlip = false;
  isListVisble: boolean;
  constructor(private _shareMe: SharemeService) {}

  ngOnInit(): void {
    this._shareMe.chatContent.subscribe((value) => {
      this.isListVisble = value;
      console.log(this.isListVisble);
    });
  }
}
