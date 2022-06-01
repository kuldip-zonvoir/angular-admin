import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BasicBootstrapTabelComponent } from "./basic-bootstrap-tabel/basic-bootstrap-tabel.component";
import { StripRowBootstrapTabelComponent } from "./strip-row-bootstrap-tabel/strip-row-bootstrap-tabel.component";
import { HoverableRowBootstrapTabelComponent } from "./hoverable-row-bootstrap-tabel/hoverable-row-bootstrap-tabel.component";
import { ResponsiveBootstrapTabelComponent } from "./responsive-bootstrap-tabel/responsive-bootstrap-tabel.component";
import { BorderedBootstrapTabelComponent } from "./bordered-bootstrap-tabel/bordered-bootstrap-tabel.component";
import { BorderlessBootstrapTabelComponent } from "./borderless-bootstrap-tabel/borderless-bootstrap-tabel.component";
import { ColorVarientBootstrapTabelComponent } from "./color-varient-bootstrap-tabel/color-varient-bootstrap-tabel.component";
import { TabelComponent } from "./reuse-tables/tabel/tabel.component";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { DialogModule } from "primeng/dialog";
import { CouponsComponent } from "./reuse-tables/coupons/coupons.component";
import { CategoryComponent } from "./reuse-tables/category/category.component";
import { OrdersComponent } from "./reuse-tables/orders/orders.component";
import { CustomersComponent } from "./reuse-tables/customers/customers.component";
import { ListContactsComponent } from "./reuse-tables/list-contacts/list-contacts.component";
import { TaskManagerComponent } from "./reuse-tables/task-manager/task-manager.component";
import { InventoryComponent } from "./reuse-tables/inventory/inventory.component";
import { InvoiceTabelComponent } from "./invoice-tabel/invoice-tabel.component";
import { SharedModule } from "../../content/shared-components/shared.module";
import { TabelFilterComponentBottomComponent } from "./reuse-tables/tabel-filter-component-bottom/tabel-filter-component-bottom.component";
import { TaskTicketsComponent } from "./task-tickets/task-tickets.component";
@NgModule({
  declarations: [
    TabelComponent,
    BasicBootstrapTabelComponent,
    StripRowBootstrapTabelComponent,
    HoverableRowBootstrapTabelComponent,
    ResponsiveBootstrapTabelComponent,
    BorderedBootstrapTabelComponent,
    BorderlessBootstrapTabelComponent,
    ColorVarientBootstrapTabelComponent,
    CouponsComponent,
    CategoryComponent,
    OrdersComponent,
    CustomersComponent,
    ListContactsComponent,
    TaskManagerComponent,
    InventoryComponent,
    InvoiceTabelComponent,
    TabelFilterComponentBottomComponent,
    TaskTicketsComponent,
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    SharedModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DialogModule,
  ],
  exports: [
    InvoiceTabelComponent,
    CouponsComponent,
    InventoryComponent,
    CategoryComponent,
    OrdersComponent,
    ListContactsComponent,
    CustomersComponent,
    TabelComponent,
    TaskManagerComponent,
    BasicBootstrapTabelComponent,
    StripRowBootstrapTabelComponent,
    HoverableRowBootstrapTabelComponent,
    ResponsiveBootstrapTabelComponent,
    BorderedBootstrapTabelComponent,
    BorderlessBootstrapTabelComponent,
    ColorVarientBootstrapTabelComponent,
    TaskTicketsComponent,
  ],
})
export class DataTabelModule {}
