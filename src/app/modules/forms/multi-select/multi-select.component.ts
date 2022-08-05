import { Component, OnInit } from "@angular/core";
// import { IDropdownSettings } from "ng-multiselect-dropdown";
// import { Observable } from "rxjs";
// import {
//   Person,
//   SelectDataService,
// } from "src/app/partials/core/selectdata.service";
// import { map } from "rxjs/operators";
interface City {
  name: string;
  code: string;
}

@Component({
  selector: "app-multi-select",
  templateUrl: "./multi-select.component.html",
  styleUrls: ["./multi-select.component.scss"],
})
export class MultiSelectComponent implements OnInit {
  cities = [];
  selectedCity: City;
  selectedCityCodes: string[];
  constructor() {
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ];
  }
  ngOnInit() {}
}
