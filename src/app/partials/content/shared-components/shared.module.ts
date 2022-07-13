import { NgModule } from "@angular/core";
import { CommonModule,DatePipe } from "@angular/common";
import { BlankPageComponent } from "./blank-page/blank-page.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CustomDropdownComponent } from "./custom-dropdown/custom-dropdown.component";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CustomModalComponent } from "./custom-modal/custom-modal.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { CustomSingleSelectComponent } from "./custom-single-select/custom-single-select.component";
import { CustomMultiSelectComponent } from "./custom-multi-select/custom-multi-select.component";
import { DialogModule } from "primeng/dialog";
import { SidebarModule } from "primeng/sidebar";

import { CollapseModule } from "ngx-bootstrap/collapse";
import { CustomPaginationComponent } from "./custom-pagination/custom-pagination.component";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { DiscussChatComponent } from "./discuss-chat/discuss-chat.component";
import { PopupDailogPositionComponent } from "./popup-dailog-position/popup-dailog-position.component";
import { ToastAlertsComponent } from "./toast-alerts/toast-alerts.component";
import { ToastModule } from "primeng/toast";
import { FileInputComponent } from "./file-input/file-input.component";
import { CustomSelectDropdownComponent } from "./custom-select-dropdown/custom-select-dropdown.component";
import { TabelFilterComponentComponent } from "../../layouts/datatables/tabel-filter-component/tabel-filter-component.component";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FileDragNDropComponent } from "./file-drag-n-drop/file-drag-n-drop.component";
import { TimelineModule } from "primeng/timeline";
import { Dropdown, DropdownModule } from "primeng/dropdown";
import { MultiSelectModule } from "primeng/multiselect";
import { FullCalenderComponent } from "./full-calender/full-calender.component";
import { FullCalendarModule } from "@fullcalendar/angular";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { VectorMap1Component } from './vector-map1/vector-map1.component';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
]);
@NgModule({
  declarations: [
    BlankPageComponent,
    CustomDropdownComponent,
    CustomModalComponent,
    CustomSingleSelectComponent,
    CustomMultiSelectComponent,
    CustomPaginationComponent,
    DiscussChatComponent,
    PopupDailogPositionComponent,
    ToastAlertsComponent,
    FileInputComponent,
    CustomSelectDropdownComponent,
    TabelFilterComponentComponent,
    FileDragNDropComponent,
    FullCalenderComponent,
    VectorMap1Component
  ],
  providers: [DatePipe],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    SidebarModule,
    BsDatepickerModule.forRoot(),
    ToastModule,
    DropdownModule,
    MultiSelectModule,
    FullCalendarModule,
    TimelineModule,
    NgMultiSelectDropDownModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  exports: [
    BlankPageComponent,
    FullCalenderComponent,
    CustomDropdownComponent,
    CustomModalComponent,
    CustomSingleSelectComponent,
    CustomMultiSelectComponent,
    CustomPaginationComponent,
    FormsModule,
    Dropdown,
    TimelineModule,
    PaginationModule,
    BsDropdownModule,
    TooltipModule,
    CollapseModule,
    DiscussChatComponent,
    DialogModule,
    MultiSelectModule,
    SidebarModule,
    ToastModule,
    BsDatepickerModule,
    NgSelectModule,
    ReactiveFormsModule,
    PopupDailogPositionComponent,
    ToastAlertsComponent,
    FileInputComponent,
    TabelFilterComponentComponent,
    CustomSelectDropdownComponent,
    FileDragNDropComponent,
  ],
})
export class SharedModule {}
