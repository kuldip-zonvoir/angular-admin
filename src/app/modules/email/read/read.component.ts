import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.scss"],
})
export class ReadComponent implements OnInit {
  mailSidebarModal = false;
  constructor() {}

  ngOnInit(): void {}
  openAppSidebar() {
    this.mailSidebarModal = !this.mailSidebarModal;
  }
}
