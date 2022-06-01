import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DatatablesRoutingModule } from "./datatables-routing.module";
import { DatatablesComponent } from "./datatables.component";
import { BasicTabeleComponent } from "./basic-tabele/basic-tabele.component";
import { AdvanceTableComponent } from "./advance-table/advance-table.component";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";
import { DataTabelModule } from "src/app/partials/layouts/datatables/datatabel.module";
import { DarkBasicTableComponent } from "./dark-basic-table/dark-basic-table.component";
import { ColoredTabelsComponent } from "./colored-tabels/colored-tabels.component";
import { Datatable1Component } from "./datatable1/datatable1.component";
import { Datatable2Component } from "./datatable2/datatable2.component";

@NgModule({
  declarations: [
    DatatablesComponent,
    BasicTabeleComponent,
    AdvanceTableComponent,
    DarkBasicTableComponent,
    ColoredTabelsComponent,
    Datatable1Component,
    Datatable2Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DataTabelModule,
    DatatablesRoutingModule,
  ],
})
export class DatatablesModule {}
