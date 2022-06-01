import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-error1",
  templateUrl: "./error1.component.html",
  styleUrls: ["./error1.component.scss"],
})
export class Error1Component implements OnInit {
  currentTheme: string;
  constructor() {
    this.currentTheme = localStorage.getItem("activetheme");
  }

  ngOnInit(): void {}
}
