import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-compose",
  templateUrl: "./compose.component.html",
  styleUrls: ["./compose.component.scss"],
})
export class ComposeComponent implements OnInit {
  mailSidebarModal = false;
  constructor() {}

  ngOnInit(): void {}
  openAppSidebar() {
    this.mailSidebarModal = !this.mailSidebarModal;
  }
}
