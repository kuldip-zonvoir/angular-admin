import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TicketdetailComponent } from "./ticketdetail/ticketdetail.component";
import { TicketlistComponent } from "./ticketlist/ticketlist.component";

import { TicketsComponent } from "./tickets.component";

const routes: Routes = [
  {
    path: "",
    component: TicketsComponent,
    children: [
      {
        path: "ticket-details",
        component: TicketdetailComponent,
        data: { breadcrumb: "Ticket Details" },
      },
      {
        path: "ticket-list",
        component: TicketlistComponent,
        data: { breadcrumb: "Ticket List" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule {}
