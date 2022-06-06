import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddInvoiceComponent } from "./add-invoice/add-invoice.component";
import { InvoiceListsComponent } from "./invoice-lists/invoice-lists.component";
import { InvoiceComponent } from "./invoice/invoice.component";

import { InvoicesComponent } from "./invoices.component";

const routes: Routes = [
  {
    path: "",
    component: InvoicesComponent,
    children: [
      {
        path: "invoice-lists",
        component: InvoiceListsComponent,
        data: { breadcrumb: "Invoice List" },
      },
      {
        path: "add-invoice",
        component: AddInvoiceComponent,
        data: { breadcrumb: "Add Invoice" },
      },
      {
        path: "invoice",
        component: InvoiceComponent,
        data: { breadcrumb: "Invoice" },
      },
      {
        path: "",
        redirectTo: "/invoice-lists",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesRoutingModule {}
