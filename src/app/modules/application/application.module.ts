import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";

import { ApplicationRoutingModule } from "./application-routing.module";
import { ApplicationComponent } from "./application.component";
import { FileManagerComponent } from "./file-manager/file-manager.component";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { DataTabelModule } from "src/app/partials/layouts/datatables/datatabel.module";
import { TaskControlComponent } from "./task-control/task-control.component";
import { NotesComponent } from "./notes/notes.component";
import { FileManagerSidebarComponent } from "./file-manager/file-manager-sidebar/file-manager-sidebar.component";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";
import { SpecificFileComponent } from "./file-manager/specific-file/specific-file.component";
import { NoteCardComponent } from "./notes/note-card/note-card.component";
import { NotesSidebarComponent } from "./notes/notes-sidebar/notes-sidebar.component";
import { EventScheduleComponent } from "./event-schedule/event-schedule.component";
import { FullCalendarModule } from "@fullcalendar/angular";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { SchedularSidebarComponent } from "./event-schedule/schedular-sidebar/schedular-sidebar.component";
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin,
]);
@NgModule({
  declarations: [
    ApplicationComponent,
    FileManagerComponent,
    TaskControlComponent,
    NotesComponent,
    FileManagerSidebarComponent,
    SpecificFileComponent,
    NoteCardComponent,
    NotesSidebarComponent,
    EventScheduleComponent,
    SchedularSidebarComponent,
  ],
  providers: [DatePipe],
  imports: [
    CommonModule,
    DataTabelModule,
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot(),
    FullCalendarModule,
    SharedModule,
    ApplicationRoutingModule,
  ],
})
export class ApplicationModule {}
