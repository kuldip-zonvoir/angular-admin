import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageModuleRoutingModule } from "./page-module-routing.module";
import { PageModuleComponent } from "./page-module.component";
import { PricingComponent } from "./pricing/pricing.component";
import { BlankComponent } from "./blank/blank.component";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";

@NgModule({
  declarations: [PageModuleComponent, PricingComponent, BlankComponent],
  imports: [CommonModule, SharedModule, PageModuleRoutingModule],
})
export class PageModuleModule {}
