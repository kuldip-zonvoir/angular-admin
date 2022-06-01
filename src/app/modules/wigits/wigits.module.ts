import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WigitsRoutingModule } from "./wigits-routing.module";
import { WigitsComponent } from "./wigits.component";
import { ListsComponent } from "./lists/lists.component";
import { WigitModule } from "src/app/partials/layouts/wigit/wigit.module";
import { WigitAppComponent } from "./wigit-app/wigit-app.component";
import { WidgitDataComponent } from "./widgit-data/widgit-data.component";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";

@NgModule({
  declarations: [
    WigitsComponent,
    ListsComponent,
    WigitAppComponent,
    WidgitDataComponent,
  ],
  imports: [
    CommonModule,
    WigitModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AngularEditorModule,
    WigitsRoutingModule,
  ],
})
export class WigitsModule {}
