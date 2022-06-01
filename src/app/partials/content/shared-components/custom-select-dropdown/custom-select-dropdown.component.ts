import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-select-dropdown",
  templateUrl: "./custom-select-dropdown.component.html",
  styleUrls: ["./custom-select-dropdown.component.scss"],
})
export class CustomSelectDropdownComponent implements OnInit {
  @Input() terms: any;
  selectedPara = "0";
  constructor() {}

  ngOnInit(): void {}
}
