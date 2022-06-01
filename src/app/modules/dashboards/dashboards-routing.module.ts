import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardsComponent } from "./dashboards.component";
import { ModernComponent } from "./modern/modern.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardsComponent,
    children: [
      {
        path: "",
        component: ModernComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
