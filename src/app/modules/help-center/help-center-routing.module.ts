import { HomeHelpComponent } from "./home-help/home-help.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HelpCenterComponent } from "./help-center.component";
import { SupportHelpComponent } from "./support-help/support-help.component";
import { GuidesComponent } from "./guides/guides.component";
import { FaqHelpComponent } from "./faq-help/faq-help.component";

const routes: Routes = [
  {
    path: "",
    component: HelpCenterComponent,
    children: [
      {
        path: "getting-started",
        component: HomeHelpComponent,
        data: { breadcrumb: "Getting Started" },
      },
      {
        path: "faq",
        component: FaqHelpComponent,
        data: { breadcrumb: "Faq" },
      },
      {
        path: "guide",
        component: GuidesComponent,
        data: { breadcrumb: "Guide" },
      },
      {
        path: "support",
        component: SupportHelpComponent,
        data: { breadcrumb: "Support" },
      },
      {
        path: "",
        redirectTo: "/getting-started",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpCenterRoutingModule {}
