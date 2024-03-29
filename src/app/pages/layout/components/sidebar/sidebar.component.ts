import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { SharemeService } from "src/app/partials/core/shareme.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  visibleSidebar: boolean;
  mobileSidebarModal: boolean;
  isSubMenuArr = new Array(22);
  urlArr = [
    "dashboards",
    "account",
    "application",
    "e-commmerce",
    "email",
    "chat",
    "contacts",
    "invoices",
    "scrumboard",
    "ticket",
    "help-center",
    "bootstrap",
    "extra",
    "wigits",
    "forms",
    "icons",
    "auth",
    "errors",
    "special-pages",
    "datatables",
    "charts",
    "maps",
    "analystic",
  ];
  zvalue = "10";
  isMobile = true;

  sidebarkey = "";
  textkey = "";
  brandkey = "";
  currentUrl: any;
  currentUrlString: any;
  constructor(
    private shareData: SharemeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    //to fill the array all element with false as a valueconsole

    this.isSubMenuArr.fill(false);
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.currentUrl = ev.url.split("/");
        this.currentUrlString = ev.url;
      }
    });
  }
  @Output() setWidth = new EventEmitter<boolean>();
  openMenu(index) {
    this.isSubMenuArr.forEach((ac, i) => {
      if (index != i) {
        this.isSubMenuArr[i] = false;
      }
    });
    this.isSubMenuArr[index] = !this.isSubMenuArr[index];
  }
  ngOnInit(): void {
    this.openMenu(
      Object.keys(this.urlArr).find(
        (key) => this.urlArr[key] === this.currentUrl[1]
      )
    );
    this.shareData.sidebarToggle.subscribe((data) => {
      this.isMobile = data;
    });
    this.shareData.sidebarToggler.subscribe((stringData) => {
      this.sidebarkey = stringData;

      this.getSidebarClass(this.sidebarkey);
    });
    this.shareData.ActiveTextToggle.subscribe((stringData) => {
      this.textkey = stringData;
      this.getActiveMenuText(this.textkey);
    });
    this.shareData.brandToggle.subscribe((data) => {
      this.brandkey = data;
      this.getBrandClass(this.brandkey);
    });
    this.shareData.mobileDialogSidebar.subscribe((data) => {
      this.mobileSidebarModal = data;
    });
  }
  getSidebarClass(value: string) {
    return {
      default: "default-sidebar",
      "1": "sidebar-1",
      "2": "sidebar-2",
      "3": "sidebar-3",
      "4": "sidebar-4",
      "5": "sidebar-5",
      "6": "sidebar-6",
      "7": "sidebar-7",
    }[value];
  }
  getActiveMenuText(value: string) {
    return {
      default: "default-active-text",
      "1": "active-text-1",
      "2": "active-text-2",
      "3": "active-text-3",
      "4": "active-text-4",
      "5": "active-text-5",
      "6": "active-text-6",
    }[value];
  }
  getBrandClass(value: string) {
    return {
      default: "default-brand",
      "1": "brand-1",
      "2": "brand-2",
      "3": "brand-3",
      "4": "brand-4",
      "5": "brand-5",
      "6": "brand-6",
      "7": "brand-7",
    }[value];
  }
  sidebarToggle() {
    this.isMobile = !this.isMobile;
    this.setWidth.emit(this.isMobile);
  }
}
