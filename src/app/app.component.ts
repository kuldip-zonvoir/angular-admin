import { Component } from "@angular/core";
import {
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Router,
} from "@angular/router";
import { Subscription } from "rxjs";
import { SharemeService } from "./partials/core/shareme.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  customClass: "light-default-color";
  loading: boolean = true;
  flashScreen: Boolean;
  loaderStatus: Boolean;
  subscription2: Subscription;
  overlayVisibility: Boolean;
  constructor(private shareData: SharemeService, private router: Router) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });
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

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
  hideOverlaySidebar() {
    this.shareData.sidebarMobileMenu(false);
  }

  ngOnDestroy(): void {
    this.subscription2.unsubscribe();
  }
}
