import { CustomTextEditorComponent } from "./custom-text-editor/custom-text-editor.component";
import { ListDragNDropComponent } from "./list-drag-n-drop/list-drag-n-drop.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdvanceWeatherCardsComponent } from "./advance-weather-cards/advance-weather-cards.component";
import { CustomizeComponent } from "./customize.component";
import { DialogComponent } from "./dialog/dialog.component";
import { TimlelineWrapComponent } from "src/app/timleline-wrap/timleline-wrap.component";
import { TosterComponent } from "./toster/toster.component";

const routes: Routes = [
  {
    path: "",
    component: CustomizeComponent,
    children: [
      {
        path: "drag-n-drop",
        component: ListDragNDropComponent,
        data: { breadcrumb: "Drag Drop" },
      },
      {
        path: "text-editor",
        component: CustomTextEditorComponent,
        data: { breadcrumb: "Text Editor" },
      },
      {
        path: "weather-cards",
        component: AdvanceWeatherCardsComponent,
        data: { breadcrumb: "Weather Cards" },
      },
      {
        path: "dialogs",
        component: DialogComponent,
        data: { breadcrumb: "Dialogs" },
      },
      {
        path: "timeline",
        component: TimlelineWrapComponent,
        data: { breadcrumb: "Timeline" },
      },
      {
        path: "toast",
        component: TosterComponent,
        data: { breadcrumb: "Toast" },
      },
      {
        path: "",
        redirectTo: "/weather-cards",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomizeRoutingModule {}
