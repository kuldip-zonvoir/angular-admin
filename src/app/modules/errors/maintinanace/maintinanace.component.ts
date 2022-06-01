import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-maintinanace",
  templateUrl: "./maintinanace.component.html",
  styleUrls: ["./maintinanace.component.scss"],
})
export class MaintinanaceComponent implements OnInit {
  currentTheme: string;
  constructor() {
    this.currentTheme = localStorage.getItem("activetheme");
  }

  ngOnInit(): void {}
}
