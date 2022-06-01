import { Component, Input, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-popup-dailog-position",
  templateUrl: "./popup-dailog-position.component.html",
  styleUrls: ["./popup-dailog-position.component.scss"],
})
export class PopupDailogPositionComponent implements OnInit {
  displayPosition: boolean;
  position: string;
  @Input() dialogModal: any;
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }
}
