import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UserauthService {
  userData: any;
  constructor(private router: Router) {
    if (localStorage.getItem("fgsdshdkfjh")) {
      this.userData = JSON.parse(localStorage.getItem("fgsdshdkfjh"));
    }
  }

  checkUserData() {
    if (
      this.userData &&
      (Object.keys(this.userData).length ||
        Object.values(this.userData).every((value) => value))
    ) {
      return true;
    } else {
      this.router.navigate(["/auth/login-1"]);
      return false;
    }
  }
}
