import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MultiDashboardComponent } from "./multi-dashboard.component";
import { Dashbord1Component } from "./dashbord1/dashbord1.component";
import { Dashbord2Component } from "./dashbord2/dashbord2.component";
import { Dashbord3Component } from "./dashbord3/dashbord3.component";
import { Dashbord4Component } from "./dashbord4/dashbord4.component";
const routes: Routes = [
  {
    path: "",
    component: MultiDashboardComponent,
    children: [
      {
        path: "dashbord-1",
        component: Dashbord1Component,
        data: { breadcrumb: "Dashboard 1" },
      },
      {
        path: "dashbord-2",
        component: Dashbord2Component,
        data: { breadcrumb: "Dashboard 2" },
      },
      {
        path: "dashbord-3",
        component: Dashbord3Component,
        data: { breadcrumb: "Dashboard 3" },
      },
      {
        path: "dashbord-4",
        component: Dashbord4Component,
        data: { breadcrumb: "Dashboard 3" },
      },
      {
        path: "",
        redirectTo: "/dashbord-1",
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
