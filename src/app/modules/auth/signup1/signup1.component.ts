import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup1",
  templateUrl: "./signup1.component.html",
  styleUrls: ["./signup1.component.scss"],
})
export class Signup1Component implements OnInit {
  currentTheme: string;
  constructor() {
    this.currentTheme = localStorage.getItem("activetheme");
  }
  ngOnInit(): void {}
}
