import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MultiDashboardComponent } from "./multi-dashboard.component";
import { Dashbord1Component } from "./dashbord1/dashbord1.component";
import { Dashbord2Component } from "./dashbord2/dashbord2.component";
import { Dashbord3Component } from "./dashbord3/dashbord3.component";
import { Dashbord4Component } from "./dashbord4/dashbord4.component";
import { DefaultDashboardComponent } from "./default-dashboard/default-dashboard.component";
import { AnalyticsDashboardComponent } from "./analytics-dashboard/analytics-dashboard.component";
const routes: Routes = [
  {
    path: "",
    component: MultiDashboardComponent,
    children: [
      {
        path: "",
        component: DefaultDashboardComponent,
        data: { breadcrumb: "Default" },
      },
      {
        path: "crm",
        component: Dashbord1Component,
        data: { breadcrumb: "CRM" },
      },
      {
        path: "crypto",
        component: Dashbord2Component,
        data: { breadcrumb: "Crypto" },
      },
      {
        path: "e-commerce",
        component: Dashbord3Component,
        data: { breadcrumb: "E-Commerce" },
      },
      {
        path: "project",
        component: Dashbord4Component,
        data: { breadcrumb: "Project" },
      },
      {
        path: "analytics",
        component: AnalyticsDashboardComponent,
        data: { breadcrumb: "Analytics" },
      },
      {
        path: "",
        redirectTo: "/crm",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiDashboardRoutingModule {}
