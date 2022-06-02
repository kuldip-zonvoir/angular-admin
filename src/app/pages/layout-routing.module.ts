import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("../modules/dashboards/dashboards.module").then(
            (m) => m.DashboardsModule
          ),
      },
      {
        path: "dashboards",
        loadChildren: () =>
          import("../modules/multi-dashboard/multi-dashboard.module").then(
            (m) => m.MultiDashboardModule
          ),
        data: { breadcrumb: "Dashboards" },
      },

      {
        path: "ticket",
        loadChildren: () =>
          import("../modules/tickets/tickets.module").then(
            (m) => m.TicketsModule
          ),
        data: { breadcrumb: "Ticket" },
      },
      {
        path: "invoices",
        loadChildren: () =>
          import("../modules/invoices/invoices.module").then(
            (m) => m.InvoicesModule
          ),
        data: { breadcrumb: "Invoice" },
      },
      {
        path: "extra",
        loadChildren: () =>
          import("../modules/customize/customize.module").then(
            (m) => m.CustomizeModule
          ),
        data: { breadcrumb: "Extra" },
      },
      {
        path: "help-center",
        loadChildren: () =>
          import("../modules/help-center/help-center.module").then(
            (m) => m.HelpCenterModule
          ),
        data: { breadcrumb: "help Center" },
      },
      {
        path: "application",
        loadChildren: () =>
          import("../modules/application/application.module").then(
            (m) => m.ApplicationModule
          ),
        data: { breadcrumb: "Application" },
      },
      {
        path: "e-commmerce",
        loadChildren: () =>
          import("../modules/e-commerce/e-commerce.module").then(
            (m) => m.ECommerceModule
          ),
        data: { breadcrumb: "E-commerce" },
      },
      {
        path: "account",
        loadChildren: () =>
          import("../modules/account/account.module").then(
            (m) => m.AccountModule
          ),
        data: { breadcrumb: "Account" },
      },
      {
        path: "contacts",
        loadChildren: () =>
          import("../modules/contacts/contacts.module").then(
            (m) => m.ContactsModule
          ),
        data: { breadcrumb: "Contacts" },
      },
      {
        path: "wigits",
        loadChildren: () =>
          import("../modules/wigits/wigits.module").then((m) => m.WigitsModule),
        data: { breadcrumb: "Widgits" },
      },
      {
        path: "analytics",
        loadChildren: () =>
          import("../modules/analysis/analysis.module").then(
            (m) => m.AnalysisModule
          ),
        data: { breadcrumb: "Analytic" },
      },
      {
        path: "scrumboard",
        loadChildren: () =>
          import("../modules/scrumboard/scrumboard.module").then(
            (m) => m.ScrumboardModule
          ),
        data: { breadcrumb: "Scrumboard" },
      },
      {
        path: "datatables",
        loadChildren: () =>
          import("../modules/datatables/datatables.module").then(
            (m) => m.DatatablesModule
          ),
        data: { breadcrumb: "Datatables" },
      },
      {
        path: "bootstrap",
        loadChildren: () =>
          import("../modules/ui-elements/ui-elements.module").then(
            (m) => m.UiElementsModule
          ),
        data: { breadcrumb: "Bootstarp" },
      },
      {
        path: "icons",
        loadChildren: () =>
          import("../modules/icons/icons.module").then((m) => m.IconsModule),
        data: { breadcrumb: "Icons" },
      },
      {
        path: "forms",
        loadChildren: () =>
          import("../modules/forms/forms.module").then((m) => m.FormModule),
        data: { breadcrumb: "Forms" },
      },
      {
        path: "special-pages",
        loadChildren: () =>
          import("../modules/page-module/page-module.module").then(
            (m) => m.PageModuleModule
          ),
        data: { breadcrumb: "Specials Pages" },
      },
      {
        path: "chat",
        loadChildren: () =>
          import("../modules/chats/chats.module").then((m) => m.ChatsModule),
        data: { breadcrumb: "Chat" },
      },
      {
        path: "email",
        loadChildren: () =>
          import("../modules/email/email.module").then((m) => m.EmailModule),
        data: { breadcrumb: "Email" },
      },
      {
        path: "charts",
        loadChildren: () =>
          import("../modules/charts/charts.module").then((m) => m.ChartsModule),
        data: { breadcrumb: "Charts" },
      },
      {
        path: "maps",
        loadChildren: () =>
          import("../modules/maps/maps.module").then((m) => m.MapsModule),
        data: { breadcrumb: "Maps" },
      },
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full",
      },
      {
        path: "**",
        redirectTo: "error/404",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
