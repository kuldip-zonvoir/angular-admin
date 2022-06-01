import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CustomizeRoutingModule } from "./customize-routing.module";
import { CustomizeComponent } from "./customize.component";
import { AdvanceCardsComponent } from "./advance-cards/advance-cards.component";
import { AdvanceWeatherCardsComponent } from "./advance-weather-cards/advance-weather-cards.component";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ListDragNDropComponent } from "./list-drag-n-drop/list-drag-n-drop.component";
import { BasicDragNDropComponent } from "./list-drag-n-drop/basic-drag-n-drop/basic-drag-n-drop.component";
import { InterchangeDragNDropComponent } from "./list-drag-n-drop/interchange-drag-n-drop/interchange-drag-n-drop.component";
import { OneWayDragNDropComponent } from "./list-drag-n-drop/one-way-drag-n-drop/one-way-drag-n-drop.component";
import { CustomTextEditorComponent } from "./custom-text-editor/custom-text-editor.component";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { FormsModule } from "@angular/forms";
import { DialogComponent } from "./dialog/dialog.component";
import { TosterComponent } from "./toster/toster.component";
import { TimlelineWrapComponent } from "src/app/timleline-wrap/timleline-wrap.component";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";
import { ModalComponent } from "./dialog/modal/modal.component";

@NgModule({
  declarations: [
    CustomizeComponent,
    AdvanceCardsComponent,
    AdvanceWeatherCardsComponent,
    ListDragNDropComponent,
    BasicDragNDropComponent,
    InterchangeDragNDropComponent,
    OneWayDragNDropComponent,
    DialogComponent,
    TosterComponent,
    TimlelineWrapComponent,
    ModalComponent,
    CustomTextEditorComponent,
  ],
  imports: [
    CommonModule,
    ProgressbarModule.forRoot(),
    AngularEditorModule,
    FormsModule,
    SharedModule,
    DragDropModule,
    CustomizeRoutingModule,
  ],
})
export class CustomizeModule {}
