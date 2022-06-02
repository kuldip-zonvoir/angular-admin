import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { Login1Component } from "./login1/login1.component";
import { SignupComponent } from "./signup/signup.component";
import { Signup1Component } from "./signup1/signup1.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { CarouselModule } from "ngx-bootstrap/carousel";

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    Login1Component,
    SignupComponent,
    Signup1Component,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, CarouselModule, AuthRoutingModule],
})
export class AuthModule {}
