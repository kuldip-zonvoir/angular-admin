import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { Login1Component } from "./login1/login1.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SignupComponent } from "./signup/signup.component";
import { Signup1Component } from "./signup1/signup1.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "login-1",
        component: LoginComponent,
      },
      {
        path: "login-2",
        component: Login1Component,
      },
      {
        path: "signup-1",
        component: SignupComponent,
      },
      {
        path: "signup-2",
        component: Signup1Component,
      },
      {
        path: "reset-password",
        component: ResetPasswordComponent,
      },

      { path: "", redirectTo: "login-1", pathMatch: "full" },
      {
        path: "**",
        component: LoginComponent,
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
