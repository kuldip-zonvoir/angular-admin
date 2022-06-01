import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HelpCenterRoutingModule } from "./help-center-routing.module";
import { HelpCenterComponent } from "./help-center.component";
import { GuidesComponent } from "./guides/guides.component";
import { FaqHelpComponent } from "./faq-help/faq-help.component";
import { SupportHelpComponent } from "./support-help/support-help.component";
import { HomeHelpComponent } from "./home-help/home-help.component";
import { HelpHeaderComponent } from "./help-header/help-header.component";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { DialogModule } from "primeng/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CollapseModule } from "ngx-bootstrap/collapse";

@NgModule({
  declarations: [
    HelpCenterComponent,
    GuidesComponent,
    FaqHelpComponent,
    SupportHelpComponent,
    HomeHelpComponent,
    HelpHeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    DialogModule,
    HelpCenterRoutingModule,
  ],
})
export class HelpCenterModule {}
