import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";
import { SidebarComponent } from "./layout/components/sidebar/sidebar.component";
import { HeaderComponent } from "./layout/components/header/header.component";
import { FooterComponent } from "./layout/components/footer/footer.component";
import { SharedModule } from "../partials/content/shared-components/shared.module";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { LayoutComponent } from "./layout/layout.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { SidebarModule } from "primeng/sidebar";
import { BrandComponent } from "./layout/components/brand/brand.component";
import { WigitModule } from "../partials/layouts/wigit/wigit.module";
import { HoverClassDirective } from "../partials/core/directives/hover.directive";
import { BreadcrumbModule } from "xng-breadcrumb";

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HoverClassDirective,
    BrandComponent,
  ],
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    SharedModule,
    SidebarModule,
    WigitModule,
    BreadcrumbModule,
    LayoutRoutingModule,
  ],
})
export class LayoutModule {}
