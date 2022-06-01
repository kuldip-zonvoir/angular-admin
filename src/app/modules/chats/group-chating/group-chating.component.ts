import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { SharemeService } from "src/app/partials/core/shareme.service";

@Component({
  selector: "app-group-chating",
  templateUrl: "./group-chating.component.html",
  styleUrls: ["./group-chating.component.scss"],
})
export class GroupChatingComponent implements OnInit {
  isListVisble: boolean;
  constructor(
    private primengConfig: PrimeNGConfig,
    private _shareMe: SharemeService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this._shareMe.chatContent.subscribe((value) => {
      this.isListVisble = value;
    });
  }
  selectFile(event) {
    console.log(event);
  }
  backTOContactList() {
    this.isListVisble = false;
    this._shareMe.updateChatView(this.isListVisble);
  }
}
