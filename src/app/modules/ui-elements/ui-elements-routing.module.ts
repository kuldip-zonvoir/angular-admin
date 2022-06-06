import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlertComponent } from "./alert/alert.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { PopoverComponent } from "./popover/popover.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { RattingComponent } from "./ratting/ratting.component";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { DatePickerComponent } from "./date-picker/date-picker.component";

import { UiElementsComponent } from "./ui-elements.component";
import { TimePickerComponent } from "./time-picker/time-picker.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { TabsComponent } from "./tabs/tabs.component";
import { AccordionsComponent } from "./accordions/accordions.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { PopupModalComponent } from "./popup-modal/popup-modal.component";
import { SpinnersComponent } from "./spinners/spinners.component";
import { BadgesComponent } from "./badges/badges.component";
import { CardsComponent } from "./cards/cards.component";
import { CollapseComponent } from "./collapse/collapse.component";
import { TypeaheadComponent } from "./typeahead/typeahead.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: "",
    component: UiElementsComponent,
    children: [
      {
        path: "tooltip",
        component: TooltipComponent,
        data: { breadcrumb: "Tooltip" },
      },
      {
        path: "popover",
        component: PopoverComponent,
        data: { breadcrumb: "Popover" },
      },
      {
        path: "list-group",
        component: ListComponent,
        data: { breadcrumb: "List Group" },
      },
      {
        path: "datepicker",
        component: DatePickerComponent,
        data: { breadcrumb: "Datepicker" },
      },
      {
        path: "alert",
        component: AlertComponent,
        data: { breadcrumb: "Alert" },
      },
      {
        path: "navbar",
        component: NavbarComponent,
        data: { breadcrumb: "Navbar" },
      },
      {
        path: "typehead",
        component: TypeaheadComponent,
        data: { breadcrumb: "Typehead" },
      },
      {
        path: "buttons",
        component: ButtonsComponent,
        data: { breadcrumb: "Buttons" },
      },
      {
        path: "collapse",
        component: CollapseComponent,
        data: { breadcrumb: "Collapse" },
      },
      {
        path: "spinners",
        component: SpinnersComponent,
        data: { breadcrumb: "Spinner" },
      },
      {
        path: "cards",
        component: CardsComponent,
        data: { breadcrumb: "Cards" },
      },
      {
        path: "carousel",
        component: CarouselComponent,
        data: { breadcrumb: "Carousel" },
      },
      {
        path: "badges",
        component: BadgesComponent,
        data: { breadcrumb: "Badges" },
      },
      {
        path: "progressbar",
        component: ProgressBarComponent,
        data: { breadcrumb: "Progressbar" },
      },
      {
        path: "modals",
        component: PopupModalComponent,
        data: { breadcrumb: "Modals" },
      },
      {
        path: "rating",
        component: RattingComponent,
        data: { breadcrumb: "Ratting" },
      },
      {
        path: "timepicker",
        component: TimePickerComponent,
        data: { breadcrumb: "Timepicker" },
      },
      {
        path: "pagination",
        component: PaginationComponent,
        data: { breadcrumb: "Pagination" },
      },
      {
        path: "dropdown",
        component: DropdownComponent,
        data: { breadcrumb: "Dropdown" },
      },
      {
        path: "tabs",
        component: TabsComponent,
        data: { breadcrumb: "Tabs" },
      },
      {
        path: "accordions",
        component: AccordionsComponent,
        data: { breadcrumb: "Accordions" },
      },
      {
        path: "",
        redirectTo: "/accordions",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiElementsRoutingModule {}
