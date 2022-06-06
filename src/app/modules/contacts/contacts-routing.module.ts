import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsListComponent } from "./contacts-list/contacts-list.component";

import { ContactsComponent } from "./contacts.component";
import { ViewGridContactsComponent } from "./view-grid-contacts/view-grid-contacts.component";

const routes: Routes = [
  {
    path: "",
    component: ContactsComponent,
    children: [
      {
        path: "grid-contacts",
        component: ViewGridContactsComponent,
        data: { breadcrumb: "Grid Contacts" },
      },
      {
        path: "list-contacts",
        component: ContactsListComponent,
        data: { breadcrumb: "List Contacts" },
      },
      {
        path: "",
        redirectTo: "/grid-contacts",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
