import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { DialogModule } from "primeng/dialog";

import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsComponent } from "./contacts.component";
import { ViewGridContactsComponent } from "./view-grid-contacts/view-grid-contacts.component";
import { ContactCardComponent } from "./view-grid-contacts/contact-card/contact-card.component";
import { ContactHeaderComponent } from "./contact-header/contact-header.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { DataTabelModule } from "src/app/partials/layouts/datatables/datatabel.module";
import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { WigitModule } from "src/app/partials/layouts/wigit/wigit.module";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";

@NgModule({
  declarations: [
    ContactsComponent,
    ViewGridContactsComponent,
    ContactCardComponent,
    ContactHeaderComponent,
    ContactsListComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    ReactiveFormsModule,
    SharedModule,
    DataTabelModule,
    WigitModule,
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    ContactsRoutingModule,
  ],
})
export class ContactsModule {}
