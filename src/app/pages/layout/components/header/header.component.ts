import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { SharemeService } from "src/app/partials/core/shareme.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  subs;
  isCollapsed: boolean;
  sidebar: boolean;
  isMobile: boolean;
  mobileMenubar: boolean;
  isToggle = false;
  headerSearch: boolean;
  dropdownProfile = false;
  dropdownEmail = false;
  dropdownNotification = false;
  visibleSidebar = false;
  headerkey = "";
  brandkey = "";
  isDropdownOpen: boolean;
  isDropdownArr = [false, false, false, false];
  profileId: boolean;
  notificationId: boolean;
  emailId: boolean;
  dropDrown = "default";
  tabId = "";
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  constructor(private shareData: SharemeService) {}
  openDropdown(index) {
    this.isDropdownArr.forEach((ac, i) => {
      if (index != i) {
        this.isDropdownArr[i] = false;
      }
    });
    this.isDropdownArr[index] = !this.isDropdownArr[index];
    console.log("dropdown is clicked");
  }
  ngOnInit(): void {
    this.subscription1 = this.shareData.sidebarToggle.subscribe((data) => {
      this.isMobile = data;
    });
    this.subscription2 = this.shareData.headerToggle.subscribe((data) => {
      this.headerkey = data;
      this.getHeaderClass(this.headerkey);
    });

    this.subscription3 = this.shareData.brandToggle.subscribe((data) => {
      this.brandkey = data;
      this.getBrandClass(this.brandkey);
    });
  }

  getBrandClass(value: string) {
    let customClass;
    if (value === "default") {
      customClass = "default-brand";
    } else if (value === "1") {
      customClass = "brand-1";
    } else if (value === "2") {
      customClass = "brand-2";
    } else if (value === "3") {
      customClass = "brand-3";
    } else if (value === "4") {
      customClass = "brand-4";
    } else if (value === "5") {
      customClass = "brand-5";
    } else if (value === "6") {
      customClass = "brand-6";
    } else if (value === "7") {
      customClass = "brand-7";
    }
    return customClass;
  }

  getHeaderClass(value: string) {
    let customClass;
    if (value === "default") {
      customClass = "default-header";
    } else if (value === "1") {
      customClass = "header-1";
    } else if (value === "2") {
      customClass = "header-2";
    } else if (value === "3") {
      customClass = "header-3";
    } else if (value === "4") {
      customClass = "header-4";
    } else if (value === "5") {
      customClass = "header-5";
    } else if (value === "6") {
      customClass = "header-6";
    } else if (value === "7") {
      customClass = "header-7";
    }
    return customClass;
  }

  toggleMe() {
    this.sidebar = true;
    this.shareData.toggleSidebar(this.sidebar);
  }

  sidebarToggle() {
    var mediaQuery = window.matchMedia("(min-width: 1181px)");
    if (mediaQuery.matches) {
      this.isMobile = !this.isMobile;
      this.shareData.toggleSidebar(this.isMobile);
    } else {
      this.mobileMenubar = true;
      this.shareData.sidebarMobileMenu(this.mobileMenubar);
    }
  }
  openSearchBar() {
    this.headerSearch = !this.headerSearch;
    this.tabToggle("");
  }

  collapsibleDropdown() {
    this.isCollapsed = !this.isCollapsed;
    this.notificationId = false;
    this.profileId = false;
    this.emailId = false;
    this.headerSearch = false;
    this.isDropdownArr[1] = false;
    this.isDropdownArr[2] = false;
    this.isDropdownArr[3] = false;
  }
  // toggle dropdown-icon-triggers
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  dropDown(value) {
    if (this.dropDrown == value) {
      this.notificationId = false;
      this.profileId = false;
      this.emailId = false;
      this.headerSearch = false;
    } else if (value === "profile") {
      this.profileId = !this.profileId;
      this.notificationId = false;
      this.emailId = false;
      console.log("profile" + this.profileId);
    } else if (value === "notifications") {
      this.notificationId = !this.notificationId;
      this.notificationId = false;
      this.profileId = false;
    } else if (value === "email") {
      this.emailId = !this.emailId;
      this.notificationId = false;
      this.profileId = false;
    }
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }
}
