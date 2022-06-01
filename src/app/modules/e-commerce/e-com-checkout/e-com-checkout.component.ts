import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-e-com-checkout",
  templateUrl: "./e-com-checkout.component.html",
  styleUrls: ["./e-com-checkout.component.scss"],
})
export class EComCheckoutComponent implements OnInit {
  tabId = "DebitCard";
  isChecked: boolean;
  constructor() {}

  ngOnInit(): void {}
  changeTab(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
}
