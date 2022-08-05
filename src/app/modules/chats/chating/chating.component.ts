import { Component, OnDestroy, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { Subscription } from "rxjs";
import { SharemeService } from "src/app/partials/core/shareme.service";
@Component({
  selector: "app-chating",
  templateUrl: "./chating.component.html",
  styleUrls: ["./chating.component.scss"],
})
export class ChatingComponent implements OnInit,OnDestroy {
  isListVisble: boolean;
    subscription: Subscription;

  constructor(
    private primengConfig: PrimeNGConfig,
    private _shareMe: SharemeService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.subscription = this._shareMe.chatContent.subscribe((value) => {
      this.isListVisble = value;
    });
  }
  selectFile(event) {
  }
  backTOContactList() {
    this.isListVisble = false;
    this._shareMe.updateChatView(this.isListVisble);
  }

    ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
