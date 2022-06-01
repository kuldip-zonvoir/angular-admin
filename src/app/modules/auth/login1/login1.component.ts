import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login1",
  templateUrl: "./login1.component.html",
  styleUrls: ["./login1.component.scss"],
})
export class Login1Component implements OnInit {
  _changeAttrs = {
    width: "20",
    height: "20",
  };
  currentTheme: string;
  constructor() {
    this.currentTheme = localStorage.getItem("activetheme");
  }

  ngOnInit(): void {
    console.log(this.currentTheme);
  }
}
