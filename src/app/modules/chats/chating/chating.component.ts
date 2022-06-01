import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { SharemeService } from "src/app/partials/core/shareme.service";
@Component({
  selector: "app-chating",
  templateUrl: "./chating.component.html",
  styleUrls: ["./chating.component.scss"],
})
export class ChatingComponent implements OnInit {
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
