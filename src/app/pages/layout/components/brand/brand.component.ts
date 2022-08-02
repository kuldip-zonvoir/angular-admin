import { SharemeService } from "src/app/partials/core/shareme.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
@Component({
  selector: "app-brand",
  templateUrl: "./brand.component.html",
  styleUrls: ["./brand.component.scss"],
})
export class BrandComponent implements OnInit, OnDestroy {
  isMobile: boolean;
  ActiveTheme: string;
  key = "";
  subscription: Subscription;
  subscription2: Subscription;

  constructor(private shareData: SharemeService) {}

  ngOnInit(): void {
    this.subscription = this.shareData.sidebarToggle.subscribe((data) => {
      this.isMobile = data;
    });
    this.subscription2 = this.shareData.themeActiveBgColor.subscribe((data) => {
      this.ActiveTheme = data;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
