import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TicketsRoutingModule } from "./tickets-routing.module";
import { TicketsComponent } from "./tickets.component";
import { TicketlistComponent } from "./ticketlist/ticketlist.component";
import { TicketdetailComponent } from "./ticketdetail/ticketdetail.component";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApexchartSharedModule } from "src/app/partials/content/shared-components/Apex-chart/apexchart.module";
import { TicketReplyComponent } from "./ticketdetail/ticket-reply/ticket-reply.component";
import { TicketInfoComponent } from "./ticketdetail/ticket-info/ticket-info.component";
import { TicketUserInfoComponent } from "./ticketdetail/ticket-user-info/ticket-user-info.component";
import { TicketTileComponent } from "./ticketlist/ticket-tile/ticket-tile.component";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { DialogModule } from "primeng/dialog";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { DataTabelModule } from "src/app/partials/layouts/datatables/datatabel.module";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";

@NgModule({
  declarations: [
    TicketsComponent,
    TicketlistComponent,
    TicketdetailComponent,
    TicketReplyComponent,
    TicketInfoComponent,
    TicketUserInfoComponent,
    TicketTileComponent,
  ],
  imports: [
    CommonModule,
    AngularEditorModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    DialogModule,
    DataTabelModule,
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    ApexchartSharedModule,
    TicketsRoutingModule,
  ],
})
export class TicketsModule {}
