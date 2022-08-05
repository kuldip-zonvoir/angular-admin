import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { SharemeService } from "./partials/core/shareme.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  customClass: "light-default-color";
  flashScreen: Boolean;
  loaderStatus: Boolean;
  subscription2: Subscription;
  overlayVisibility: Boolean;
  constructor(private shareData: SharemeService) {
    this.flashScreen = true;
    this.loaderStatus = true;
  }

  ngOnInit(): void {
    if (this.customClass) {
      localStorage.setItem("activetheme", this.customClass);
    } else {
      localStorage.setItem("activetheme", "light-default-color");
    }

    // for moibile Sidebar
    this.subscription2 = this.shareData.mobileDialogSidebar.subscribe(
      (data) => {
        this.overlayVisibility = data;
      }
    );
  }
  hideOverlaySidebar() {
    this.shareData.sidebarMobileMenu(false);
  }
  ngOnDestroy(): void {
    this.subscription2.unsubscribe();
  }
}
