import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharemeService {
  // for chat App
  public chatContent = new BehaviorSubject<boolean>(false);
  public currentChatValue = this.chatContent.asObservable();
  // Custom Modal
  private customModal = new BehaviorSubject(false);
  private customModalWhich = new BehaviorSubject(null);
  modalToggle = this.customModal.asObservable();
  modalToggle1 = this.customModalWhich.asObservable();

  private mobileSidebar = new BehaviorSubject(false);
  sidebarToggle = this.mobileSidebar.asObservable();
  // sidebar background change
  private themeSidebar = new BehaviorSubject(false);
  themeSet = this.themeSidebar.asObservable();
  // header background change
  private headerSwitch = new BehaviorSubject("default");
  headerToggle = this.headerSwitch.asObservable();

  // get Active theme color
  private themeActiveColor = new BehaviorSubject("light_theme");
  themeActiveBgColor = this.themeActiveColor.asObservable();

  // ondrag card style
  private cardDrag = new BehaviorSubject("purple-light-color");
  cardDragBackground = this.cardDrag.asObservable();
  // brand background change
  private brandSwitch = new BehaviorSubject("default");
  brandToggle = this.brandSwitch.asObservable();

  private sidebarSwitch = new BehaviorSubject("default");
  sidebarToggler = this.sidebarSwitch.asObservable();
  //Active Color on  sidebar background change
  private ActiveTextSwitch = new BehaviorSubject("default");
  ActiveTextToggle = this.ActiveTextSwitch.asObservable();
  //Active Color on  sidebar background change
  private mobileMenuDialog = new BehaviorSubject(false);
  mobileDialogSidebar = this.mobileMenuDialog.asObservable();

  constructor() {}
  // Update Chat
  updateChatView(chat: boolean) {
    this.chatContent.next(chat);
  }
  updateDragCardBG(dragBg: string) {
    this.cardDrag.next(dragBg);
  }
  // custom modal
  updateModalState(status: boolean, which = null) {
    this.customModal.next(status);
    this.customModalWhich.next(which);
  }
  // set Active theme color
  setActiveThemeColor(themeColor: string) {
    this.themeActiveColor.next(themeColor);
  }
  // sidebar FOR mobile and Desktop
  sidebarMobileMenu(isMobile: boolean) {
    this.mobileMenuDialog.next(isMobile);
  }
  updateActiveText(activetext: string) {
    this.ActiveTextSwitch.next(activetext);
  }
  updateHeader(customHeader: string) {
    this.headerSwitch.next(customHeader);
  }
  updateBrand(customBrand: string) {
    this.brandSwitch.next(customBrand);
  }
  updateSidebar(customSidebar: string) {
    this.sidebarSwitch.next(customSidebar);
  }
  // mini sidebar on desktop
  toggleSidebar(toggler: boolean) {
    this.mobileSidebar.next(toggler);
  }
  themeToggle(toggle: boolean) {
    this.themeSidebar.next(toggle);
  }
  State = [
    { id: 1, name: "Gujarat", country: 1 },
    { id: 2, name: "Maharastra", country: 1 },
    { id: 3, name: "Rajasthan", country: 1 },
    { id: 4, name: "Uttar Pradesh", country: 1 },
  ];
}
