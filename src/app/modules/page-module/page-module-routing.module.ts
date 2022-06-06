import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlankComponent } from "./blank/blank.component";
import { PageModuleComponent } from "./page-module.component";
import { PricingComponent } from "./pricing/pricing.component";

const routes: Routes = [
  {
    path: "",
    component: PageModuleComponent,
    children: [
      {
        path: "price-plans",
        component: PricingComponent,
        data: { breadcrumb: "Price Plans" },
      },
      {
        path: "blank-page",
        component: BlankComponent,
        data: { breadcrumb: "Black Page" },
      },
      {
        path: "",
        redirectTo: "/price-plans",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageModuleRoutingModule {}
