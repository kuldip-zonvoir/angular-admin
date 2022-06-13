import { Component, OnDestroy, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { SharemeService } from "src/app/partials/core/shareme.service";
import { ThemeService } from "src/app/partials/core/theme.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit,OnDestroy {
  isResponsive: boolean;
  radioModel = "light";
  isDisable = true;
  isChecked: boolean;
  hId = "0";
  bId = "0";
  sId = "0";
  tId = "0";
  themeId: string;
  key = "default";
  themeMode = "light";
  primaryColor = "purple";

  darkThemes = [
    "default-dark-color",
    "amber-dark-color",
    "purple-dark-color",
    "greenny-dark-color",
    "pink-dark-color",
    "deeporange-dark-color",
  ];
  lightThemes = [
    "default-light-color",
    "amber-light-color",
    "purple-light-color",
    "greenny-light-color",
    "pink-light-color",
    "deeporange-light-color",
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
  customClass = "default-light-color";
  currentTheme: string;
  themeIndex: number;
  mobileSidebarModal: boolean;
  menuBar: boolean;
    subscription1: Subscription;
    subscription2: Subscription;

  constructor(
    private shareData: SharemeService,
    private router: Router,
    private _activedThemeService: ThemeService
  ) {
    localStorage.setItem("activetheme", this.customClass);
    this.currentTheme = localStorage.getItem("activetheme");

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
   this.subscription2 =  this.shareData.mobileDialogSidebar.subscribe((data) => {
      this.mobileSidebarModal = data;
    });

    if (this.currentTheme == "default-light-color") {
      this.isChecked = false;
    } else {
      this.isChecked = true;
    }
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
      console.log(
        "theme MOde " +
          this.themeMode +
          "localstorage  Activated Dark theme " +
          this.currentTheme
      );
    }
  }

  getCssClass(value: string) {
    if (value === "light") {
      let themeIdx = this.themeId ? this.themeId : "0";
      this.activedTheme(themeIdx);
      this.customClass = "default-light-color";
      localStorage.setItem("activetheme", this.customClass);
      this.currentTheme = localStorage.getItem("activetheme");
    } else {
      let themeIdx = this.themeId ? this.themeId : "0";
      this.activedTheme(themeIdx);
      this.customClass = "default-dark-color";
      localStorage.setItem("activetheme", this.customClass);
      this.currentTheme = localStorage.getItem("activetheme");
    }
    this.shareData.updateDragCardBG(this.customClass);
  }

  // close sidebar modal
  closeSidebarModal() {
    this.menuBar = false;
    this.shareData.sidebarMobileMenu(this.menuBar);
    this.menuBar = true;
    // console.log(!this.mobileSidebarModal, this.menuBar);
    // if (!this.mobileSidebarModal && this.menuBar) {
    //   console.log("welcome outside clicked");
    //   this.menuBar = false;
    //   this.shareData.sidebarMobileMenu(this.menuBar);
    //   this.menuBar = true;
    // }
  }
  closeSidebarOutside() {
    if (!this.mobileSidebarModal) {
      this.closeSidebarModal();
    }
  }

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

  // ty
  toggleThemeMode() {
    this.isDark = !this.isDark;
  }
  changeSidebarMode() {
    this.isDarkSidebar = !this.isDarkSidebar;
  }
  changeWidth(event) {
    this.isResponsive = event;
  }
    ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
