import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  customClass: string;
  flashScreen: Boolean;
  constructor() {
    this.flashScreen = true;
    this.customClass = localStorage.getItem("activetheme");
    if (this.customClass) {
      localStorage.setItem("activetheme", this.customClass);
    } else {
      localStorage.setItem("activetheme", "default-light-color");
    }
  }

  ngOnInit(): void {
    localStorage.setItem("activetheme", this.customClass);
  }
}
