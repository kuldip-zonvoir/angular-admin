import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListPageComponent } from "./list-page/list-page.component";

import { ScrumboardComponent } from "./scrumboard.component";

const routes: Routes = [
  {
    path: "",
    component: ScrumboardComponent,
    children: [
      {
        path: "list-page",
        component: ListPageComponent,
        data: { breadcrumb: "" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrumboardRoutingModule {}
