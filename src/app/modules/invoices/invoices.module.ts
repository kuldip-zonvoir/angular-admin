import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvoicesRoutingModule } from "./invoices-routing.module";
import { InvoicesComponent } from "./invoices.component";
import { AddInvoiceComponent } from "./add-invoice/add-invoice.component";
import { InvoiceListsComponent } from "./invoice-lists/invoice-lists.component";
import { DataTabelModule } from "src/app/partials/layouts/datatables/datatabel.module";
import { InvoiceComponent } from "./invoice/invoice.component";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";

@NgModule({
  declarations: [
    InvoicesComponent,
    AddInvoiceComponent,
    InvoiceListsComponent,
    InvoiceComponent,
  ],
  imports: [CommonModule, SharedModule, DataTabelModule, InvoicesRoutingModule],
})
export class InvoicesModule {}
