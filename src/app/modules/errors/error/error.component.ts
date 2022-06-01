import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
})
export class ErrorComponent implements OnInit {
  currentTheme: string;
  constructor() {
    this.currentTheme = localStorage.getItem("activetheme");
  }

  ngOnInit(): void {}
}
