import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  customClass: "light-default-color";
  flashScreen: Boolean;
  loaderStatus: Boolean;
  constructor() {
    this.flashScreen = true;
    this.loaderStatus = true;
  }

  ngOnInit(): void {
    if (this.customClass) {
      localStorage.setItem("activetheme", this.customClass);
    } else {
      localStorage.setItem("activetheme", "light-default-color");
    }
  }
}
