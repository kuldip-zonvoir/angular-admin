import { Component, OnDestroy, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { SharemeService } from "src/app/partials/core/shareme.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit, OnDestroy {
  isResponsive: boolean;
  isDisable = true;
  isChecked: boolean = true;
  hId = "0";
  bId = "0";
  sId = "0";
  tId = "0";
  themeId: string;
  key = "default";
  themeMode = "light";
  primaryColor = "purple";

  darkThemes = [
    "dark-default-color",
    "dark-amber-color",
    "dark-purple-color",
    "dark-greenny-color",
    "dark-pink-color",
    "dark-deeporange-color",
  ];
  lightThemes = [
    "light-default-color",
    "light-amber-color",
    "light-purple-color",
    "light-greenny-color",
    "light-pink-color",
    "light-deeporange-color",
  ];

  isDark: boolean;
  isDarkSidebar = false;
  isActive = false;
  getActiveClass: string;
  activeTheme: "activeTheme";
  dropdown: boolean;
  themeSet: boolean;
  zvalue = "1000";
  currentUrl: any;
  component: string;
  greenLightTheme: string;
  pinkLightTheme: string;
  defaultLightTheme: string;
  greenDarkTheme: string;
  pinkDarkTheme: string;
  defaultDarkTheme: string;
  visibleSidebar2: boolean;
  isDarkTheme: Observable<boolean>;
  customClass = "light-default-color";
  currentTheme: string;
  themeIndex: number;
  mobileSidebarModal: boolean;
  menuBar: boolean;
  subscription1: Subscription;
  subscription2: Subscription;

  constructor(private shareData: SharemeService, private router: Router) {
    this.currentTheme = localStorage.getItem("activetheme");
    this.currentTheme = this.customClass;
    this.customClass = this.currentTheme;
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.currentUrl = ev.url.split("/");
        if (this.currentUrl[1]) {
          this.component = this.currentUrl[1];
        } else {
          this.component = this.currentUrl[0];
        }
      }
    });
  }
  ngOnInit() {
    this.subscription1 = this.shareData.sidebarToggle.subscribe((data) => {
      this.isResponsive = data;
    });

    this.menuBar = true;
    // for moibile Sidebar
    this.subscription2 = this.shareData.mobileDialogSidebar.subscribe(
      (data) => {
        this.mobileSidebarModal = data;
      }
    );
  }

  // get the active theme
  activedTheme(value: string) {
    if (this.themeMode === "light" && this.themeId != value) {
      this.themeId = value;
      this.themeIndex = +value;
      this.customClass = this.lightThemes[this.themeIndex];
      localStorage.setItem("activetheme", this.customClass);
      this.currentTheme = localStorage.getItem("activetheme");
    }
    if (this.themeMode === "dark" && this.themeId != value) {
      this.themeId = value;
      this.themeIndex = +value;
      this.customClass = this.darkThemes[this.themeIndex];
      localStorage.setItem("activetheme", this.customClass);
      this.currentTheme = localStorage.getItem("activetheme");
    }
  }

  // to get the active theme
  getCssClass(value: string) {
    if (value === "light") {
      let themeIdx = this.themeId ? this.themeId : "0";
      this.activedTheme(themeIdx);
      this.customClass = "light-default-color";
      this.shareData.setActiveThemeColor("light_theme");
      localStorage.setItem("activetheme", this.customClass);
      this.currentTheme = localStorage.getItem("activetheme");
    } else {
      let themeIdx = this.themeId ? this.themeId : "0";
      this.activedTheme(themeIdx);
      this.customClass = "dark-default-color";
      this.shareData.setActiveThemeColor("dark_theme");
      localStorage.setItem("activetheme", this.customClass);
      this.currentTheme = localStorage.getItem("activetheme");
    }
    this.shareData.updateDragCardBG(this.customClass);
  }

  // close sidebar modal on mobile
  closeSidebarModal() {
    this.menuBar = false;
    this.shareData.sidebarMobileMenu(this.menuBar);
    this.menuBar = true;
  }

  // close side bar on click out side
  closeSidebarOutside() {
    if (!this.mobileSidebarModal) {
      this.closeSidebarModal();
    }
  }

  // change  Active color in sidebar
  changeActiveText(value: string) {
    this.shareData.updateActiveText(value);
    if (this.tId != value) {
      this.tId = value;
    }
  }

  // change Header Color
  changeHeader(value: string) {
    this.shareData.updateHeader(value);
    if (this.hId != value) {
      this.hId = value;
    }
  }

  // change Brand color
  changeBrand(value: string) {
    this.shareData.updateBrand(value);
    if (this.bId != value) {
      this.bId = value;
    }
  }

  // change Sidebar Color
  changeSidebar(value: string) {
    this.shareData.updateSidebar(value);
    if (this.sId != value) {
      this.sId = value;
    }
  }

  // open customization Panel
  toggleSetTheme() {
    this.visibleSidebar2 = true;
  }

  // toggle Dark Mode to Light Mode
  changeMode(val) {
    if (this.themeMode != val) {
      this.themeMode = val;
      this.isChecked = true;
      this.getCssClass(this.themeMode);
    }
  }

  // change theme light  mode to dark mode
  toggleThemeMode() {
    this.isDark = !this.isDark;
  }

  changeSidebarMode() {
    this.isDarkSidebar = !this.isDarkSidebar;
  }

  changeWidth(event) {
    this.isResponsive = event;
  }

  // destroy all the subscription object
  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
