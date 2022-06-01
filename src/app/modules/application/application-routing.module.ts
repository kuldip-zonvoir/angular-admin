import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApplicationComponent } from "./application.component";
import { EventScheduleComponent } from "./event-schedule/event-schedule.component";
import { FileManagerComponent } from "./file-manager/file-manager.component";
import { NotesComponent } from "./notes/notes.component";
import { TaskControlComponent } from "./task-control/task-control.component";

const routes: Routes = [
  {
    path: "",
    component: ApplicationComponent,
    children: [
      {
        path: "file-manager",
        component: FileManagerComponent,
        data: { breadcrumb: "File Manager" },
      },
      {
        path: "notes",
        component: NotesComponent,
        data: { breadcrumb: "Notes" },
      },
      {
        path: "task-manager",
        component: TaskControlComponent,
        data: { breadcrumb: "Task Manager" },
      },
      {
        path: "event-calender",
        component: EventScheduleComponent,
        data: { breadcrumb: "Full Calender" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
