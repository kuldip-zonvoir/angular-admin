import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListsComponent } from "./lists/lists.component";
import { WidgitDataComponent } from "./widgit-data/widgit-data.component";
import { WigitAppComponent } from "./wigit-app/wigit-app.component";
import { WigitsComponent } from "./wigits.component";

const routes: Routes = [
  {
    path: "",
    component: WigitsComponent,
    children: [
      {
        path: "widgit-app",
        component: WigitAppComponent,
        data: { breadcrumb: "Widgits App" },
      },
      {
        path: "widgit-data",
        component: WidgitDataComponent,
        data: { breadcrumb: "Widgit Data" },
      },
      {
        path: "",
        redirectTo: "/widgit-app",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WigitsRoutingModule {}
