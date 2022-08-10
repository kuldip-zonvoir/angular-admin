import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
interface User {
  username: string;
  password: string;
}
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  currentTheme: string;
  userData: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.currentTheme = localStorage.getItem("activetheme");
  }

  ngOnInit(): void {
    this.userData = this.formBuilder.group({
      username: ["strifedemo.com", Validators.required],
      password: ["strife@123.com", Validators.required],
    });
  }
  onSubmit() {
    if (!this.userData.invalid) {
      let data = JSON.stringify(this.userData.value);
      localStorage.setItem("fgsdshdkfjh", data);
      this.router.navigate(["/"]);
    }
  }
}
