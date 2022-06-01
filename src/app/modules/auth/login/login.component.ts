import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  currentTheme: string;

  constructor(private router: Router) {
    this.currentTheme = localStorage.getItem("activetheme");
  }

  ngOnInit(): void {}

  onLogin() {
    // this.router.navigate(["/"]);
  }
}
