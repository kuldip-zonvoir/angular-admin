import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardsRoutingModule } from "./dashboards-routing.module";
import { DashboardsComponent } from "./dashboards.component";
import { ModernComponent } from "./modern/modern.component";
import { DashboardModule } from "src/app/partials/layouts/dashboard/dashboard.module";

@NgModule({
  declarations: [DashboardsComponent, ModernComponent],
  imports: [CommonModule, DashboardModule, DashboardsRoutingModule],
})
export class DashboardsModule {}
