import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./partials/core/auth.guard";

const routes: Routes = [
  {
    path: "",
    // pathMatch: "full",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/layout.module").then((m) => m.LayoutModule),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "errors",
    loadChildren: () =>
      import("./modules/errors/errors.module").then((m) => m.ErrorsModule),
  },

  { path: "**", redirectTo: "error/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
