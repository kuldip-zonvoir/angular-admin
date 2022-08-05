import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrumboardRoutingModule } from "./scrumboard-routing.module";
import { ScrumboardComponent } from "./scrumboard.component";
import { ListPageComponent } from "./list-page/list-page.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { DialogModule } from "primeng/dialog";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";
import { ScrubboardTaskComponent } from "./list-page/scrubboard-task/scrubboard-task.component";
import { MultiSelectModule } from "primeng/multiselect";

@NgModule({
  declarations: [
    ScrumboardComponent,
    ListPageComponent,
    ScrubboardTaskComponent,
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    DialogModule,
    MultiSelectModule,
    SharedModule,
    DragDropModule,
    ScrumboardRoutingModule,
  ],
})
export class ScrumboardModule {}
