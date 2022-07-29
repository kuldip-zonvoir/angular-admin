import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-e-com-checkout",
  templateUrl: "./e-com-checkout.component.html",
  styleUrls: ["./e-com-checkout.component.scss"],
})
export class EComCheckoutComponent implements OnInit {
  tabId = "DebitCard";
  isChecked: boolean;
  today: Date;
  statesArr = [];
  selectedState: String;
  citiesArr = [];
  selectedCity: String;
  constructor() {
    this.today = new Date();
    this.statesArr = [
      {
        value: "0",
        label: "Uttar Pradesh",
      },
      {
        value: "1",
        label: "Punjab",
      },
      {
        value: "2",
        label: "Madya Prodesh",
      },
      {
        value: "3",
        label: "Rajasthan",
      },
      {
        value: "4",
        label: "Delhi",
      },
    ];
    this.citiesArr = [
      {
        value: "0",
        label: "Knapur",
      },
      {
        value: "1",
        label: "Lucknow",
      },
      {
        value: "2",
        label: "Sant Kabeer Nagar",
      },
    ];
  }

  ngOnInit(): void {}
  changeTab(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
}
