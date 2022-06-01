import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  positions = [
    {
      id: "1",
      modal_position: "left",
      modal_title: "Left",
    },
    {
      id: "2",
      modal_position: "right",
      modal_title: "Right",
    },
    {
      id: "3",
      modal_position: "top-left",
      modal_title: "Top Left",
    },
    {
      id: "4",
      modal_position: "top-right",
      modal_title: "Top Right",
    },
    {
      id: "5",
      modal_position: "bottom-left",
      modal_title: "Bottom Left",
    },
    {
      id: "6",
      modal_position: "bottom-right",
      modal_title: "Bottom Right",
    },
    {
      id: "7",
      modal_position: "bottom",
      modal_title: "Bottom",
    },
    {
      id: "8",
      modal_position: "top",
      modal_title: "Top",
    },
  ];

  displayModal: boolean;

  displayBasic: boolean;

  displayBasic2: boolean;

  displayMaximizable: boolean;

  displayPosition: boolean;

  position: string;

  showModalDialog() {
    this.displayModal = true;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
}
