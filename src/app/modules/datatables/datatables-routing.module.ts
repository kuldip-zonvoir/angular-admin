import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdvanceTableComponent } from "./advance-table/advance-table.component";
import { BasicTabeleComponent } from "./basic-tabele/basic-tabele.component";
import { ColoredTabelsComponent } from "./colored-tabels/colored-tabels.component";
import { Datatable1Component } from "./datatable1/datatable1.component";
import { Datatable2Component } from "./datatable2/datatable2.component";
import { DatatablesComponent } from "./datatables.component";
const routes: Routes = [
  {
    path: "",
    component: DatatablesComponent,
    children: [
      {
        path: "basic-table",
        component: BasicTabeleComponent,
      },
      {
        path: "colord-table",
        component: ColoredTabelsComponent,
      },
      {
        path: "advance-table",
        component: AdvanceTableComponent,
      },
      {
        path: "datatable-1",
        component: Datatable1Component,
      },
      {
        path: "datatable-2",
        component: Datatable2Component,
      },
      {
        path: "",
        redirectTo: "/basic-table",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatatablesRoutingModule {}
