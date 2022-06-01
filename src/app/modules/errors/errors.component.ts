import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-errors",
  templateUrl: "./errors.component.html",
  styleUrls: ["./errors.component.scss"],
})
export class ErrorsComponent implements OnInit {
  currentTheme: string;
  constructor() {
    this.currentTheme = localStorage.getItem("activetheme");
  }

  ngOnInit(): void {}
}
