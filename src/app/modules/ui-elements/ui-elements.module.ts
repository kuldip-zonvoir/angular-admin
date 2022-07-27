import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { RatingModule } from "ngx-bootstrap/rating";
import { PopoverModule } from "ngx-bootstrap/popover";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TimepickerModule } from "ngx-bootstrap/timepicker";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UiElementsRoutingModule } from "./ui-elements-routing.module";
import { UiElementsComponent } from "./ui-elements.component";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { PopoverComponent } from "./popover/popover.component";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { AlertModule } from "ngx-bootstrap/alert";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertComponent } from "./alert/alert.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { RattingComponent } from "./ratting/ratting.component";
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions,
} from "ngx-highlightjs";
import { BasicComponent } from "./tooltip/basic/basic.component";
import { PlacementComponent } from "./tooltip/placement/placement.component";
import { DynanicComponent } from "./tooltip/dynanic/dynanic.component";
import { DismissComponent } from "./tooltip/dismiss/dismiss.component";
import { BasicPopOverComponent } from "./popover/basic-pop-over/basic-pop-over.component";
import { DissmissPopoverComponent } from "./popover/dissmiss-popover/dissmiss-popover.component";
import { DynamicPopoverComponent } from "./popover/dynamic-popover/dynamic-popover.component";
import { PlacementPopoverComponent } from "./popover/placement-popover/placement-popover.component";
import { BasicAlertComponent } from "./alert/basic-alert/basic-alert.component";
import { LinkColorAlertComponent } from "./alert/link-color-alert/link-color-alert.component";
import { ContentAlertComponent } from "./alert/content-alert/content-alert.component";
import { DissmissAlertComponent } from "./alert/dissmiss-alert/dissmiss-alert.component";
import { BasicRattingComponent } from "./ratting/basic-ratting/basic-ratting.component";
import { DynamicRattingComponent } from "./ratting/dynamic-ratting/dynamic-ratting.component";
import { SelectRattingComponent } from "./ratting/select-ratting/select-ratting.component";
import { BasicDatepickerComponent } from "./date-picker/basic-datepicker/basic-datepicker.component";
import { RangeDatepickerComponent } from "./date-picker/range-datepicker/range-datepicker.component";
import { DateformatDatepickerComponent } from "./date-picker/dateformat-datepicker/dateformat-datepicker.component";
import { DateformatRangeDatepickerComponent } from "./date-picker/dateformat-range-datepicker/dateformat-range-datepicker.component";
import { StaticProgressbarComponent } from "./progress-bar/static-progressbar/static-progressbar.component";
import { DynamicProgressbarComponent } from "./progress-bar/dynamic-progressbar/dynamic-progressbar.component";
import { HeightProgressbarComponent } from "./progress-bar/height-progressbar/height-progressbar.component";
import { StripedProgressbarComponent } from "./progress-bar/striped-progressbar/striped-progressbar.component";
import { TimePickerComponent } from "./time-picker/time-picker.component";
import { BasicTimeComponent } from "./time-picker/basic-time/basic-time.component";
import { MeridianTimeComponent } from "./time-picker/meridian-time/meridian-time.component";
import { MinSecTimeComponent } from "./time-picker/min-sec-time/min-sec-time.component";
import { ValidationTimeComponent } from "./time-picker/validation-time/validation-time.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { BasicPaginationComponent } from "./pagination/basic-pagination/basic-pagination.component";
import { CustomLinkPaginationComponent } from "./pagination/custom-link-pagination/custom-link-pagination.component";
import { BoundryLinkPaginationComponent } from "./pagination/boundry-link-pagination/boundry-link-pagination.component";
import { ChangeEventPaginationComponent } from "./pagination/change-event-pagination/change-event-pagination.component";
import { SepratedPaginationComponent } from "./pagination/seprated-pagination/seprated-pagination.component";
import { RoundedPaginationComponent } from "./pagination/rounded-pagination/rounded-pagination.component";
import { BasicButtonComponent } from "./buttons/basic-button/basic-button.component";
import { OutlineButtonComponent } from "./buttons/outline-button/outline-button.component";
import { PillButtonComponent } from "./buttons/pill-button/pill-button.component";
import { SizeButtonComponent } from "./buttons/size-button/size-button.component";
import { LinkButtonComponent } from "./buttons/link-button/link-button.component";
import { StateButtonComponent } from "./buttons/state-button/state-button.component";
import { BasicTabComponent } from "./tabs/basic-tab/basic-tab.component";
import { TabsComponent } from "./tabs/tabs.component";
import { HorizontalFullTabsComponent } from "./tabs/horizontal-full-tabs/horizontal-full-tabs.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { BasicDropdownComponent } from "./dropdown/basic-dropdown/basic-dropdown.component";
import { VarientDropdownComponent } from "./dropdown/varient-dropdown/varient-dropdown.component";
import { SplitDropdownComponent } from "./dropdown/split-dropdown/split-dropdown.component";
import { PositionDropdownComponent } from "./dropdown/position-dropdown/position-dropdown.component";
import { VerticalTabComponent } from "./tabs/vertical-tab/vertical-tab.component";
import { FullWidthTabComponent } from "./tabs/full-width-tab/full-width-tab.component";
import { AccordionsComponent } from "./accordions/accordions.component";
import { BasicAccordionComponent } from "./accordions/basic-accordion/basic-accordion.component";
import { StyleAccordionComponent } from "./accordions/style-accordion/style-accordion.component";
import { DynamicAccordionComponent } from "./accordions/dynamic-accordion/dynamic-accordion.component";
import { OnlyOneAccordionComponent } from "./accordions/only-one-accordion/only-one-accordion.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { BasicCarouselComponent } from "./carousel/basic-carousel/basic-carousel.component";
import { DynamicCarouselComponent } from "./carousel/dynamic-carousel/dynamic-carousel.component";
import { CaptionCarouselComponent } from "./carousel/caption-carousel/caption-carousel.component";
import { CustomCarouselComponent } from "./carousel/custom-carousel/custom-carousel.component";
import { PopupModalComponent } from "./popup-modal/popup-modal.component";
import { BasicModalComponent } from "./popup-modal/basic-modal/basic-modal.component";
import { NestedModalComponent } from "./popup-modal/nested-modal/nested-modal.component";
import { SizeModalComponent } from "./popup-modal/size-modal/size-modal.component";
import { AutoModalComponent } from "./popup-modal/auto-modal/auto-modal.component";
import { SpinnersComponent } from "./spinners/spinners.component";
import { BasicSpinnerComponent } from "./spinners/basic-spinner/basic-spinner.component";
import { ColorsSpinnerComponent } from "./spinners/colors-spinner/colors-spinner.component";
import { ButtonSpinnerComponent } from "./spinners/button-spinner/button-spinner.component";
import { GlowSpinnerComponent } from "./spinners/glow-spinner/glow-spinner.component";
import { SizeSpinnerComponent } from "./spinners/size-spinner/size-spinner.component";
import { AlignmentSpinnerComponent } from "./spinners/alignment-spinner/alignment-spinner.component";
import { BadgesComponent } from "./badges/badges.component";
import { BasicBadgeComponent } from "./badges/basic-badge/basic-badge.component";
import { VarientBadgeComponent } from "./badges/varient-badge/varient-badge.component";
import { PillBadgeComponent } from "./badges/pill-badge/pill-badge.component";
import { LinkBadgeComponent } from "./badges/link-badge/link-badge.component";
import { CardsComponent } from "./cards/cards.component";
import { BasicCardsComponent } from "./cards/basic-cards/basic-cards.component";
import { ImageCardComponent } from "./cards/image-card/image-card.component";
import { ListCardComponent } from "./cards/list-card/list-card.component";
import { HeaderFooterCardComponent } from "./cards/header-footer-card/header-footer-card.component";
import { Style1CardComponent } from "./cards/style1-card/style1-card.component";
import { Style2CardComponent } from "./cards/style2-card/style2-card.component";
import { Layout1CardComponent } from "./cards/layout1-card/layout1-card.component";
import { Layout2CardComponent } from "./cards/layout2-card/layout2-card.component";
import { CollapseComponent } from "./collapse/collapse.component";
import { BasicCollapseComponent } from "./collapse/basic-collapse/basic-collapse.component";
import { EventCollapseComponent } from "./collapse/event-collapse/event-collapse.component";
import { ManualCollapseComponent } from "./collapse/manual-collapse/manual-collapse.component";
import { InlineCollapseComponent } from "./collapse/inline-collapse/inline-collapse.component";
import { TypeaheadComponent } from "./typeahead/typeahead.component";
import { BasicTypehedComponent } from "./typeahead/basic-typehed/basic-typehed.component";
import { PositionTypehedComponent } from "./typeahead/position-typehed/position-typehed.component";
import { ItemTemplateTypehedComponent } from "./typeahead/item-template-typehed/item-template-typehed.component";
import { AsyncDataTypehedComponent } from "./typeahead/async-data-typehed/async-data-typehed.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BasicNavbarComponent } from "./navbar/basic-navbar/basic-navbar.component";
import { ColorSchemeNavbarComponent } from "./navbar/color-scheme-navbar/color-scheme-navbar.component";
import { TogglerNavbarComponent } from "./navbar/toggler-navbar/toggler-navbar.component";
import { BrandNavbarComponent } from "./navbar/brand-navbar/brand-navbar.component";
import { ListComponent } from "./list/list.component";
import { BasicListComponent } from "./list/basic-list/basic-list.component";
import { ActiveItemListComponent } from "./list/active-item-list/active-item-list.component";
import { DisableItemListComponent } from "./list/disable-item-list/disable-item-list.component";
import { LinkButtonListComponent } from "./list/link-button-list/link-button-list.component";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";

@NgModule({
  declarations: [
    UiElementsComponent,
    TooltipComponent,
    PopoverComponent,
    DatePickerComponent,
    AlertComponent,
    ButtonsComponent,
    ProgressBarComponent,
    RattingComponent,
    BasicComponent,
    PlacementComponent,
    DynanicComponent,
    DismissComponent,
    BasicPopOverComponent,
    DissmissPopoverComponent,
    DynamicPopoverComponent,
    PlacementPopoverComponent,
    BasicAlertComponent,
    LinkColorAlertComponent,
    ContentAlertComponent,
    DissmissAlertComponent,
    BasicRattingComponent,
    DynamicRattingComponent,
    SelectRattingComponent,
    BasicDatepickerComponent,
    RangeDatepickerComponent,
    DateformatDatepickerComponent,
    DateformatRangeDatepickerComponent,
    StaticProgressbarComponent,
    DynamicProgressbarComponent,
    HeightProgressbarComponent,
    StripedProgressbarComponent,
    TimePickerComponent,
    BasicTimeComponent,
    MeridianTimeComponent,
    MinSecTimeComponent,
    ValidationTimeComponent,
    PaginationComponent,
    BasicPaginationComponent,
    CustomLinkPaginationComponent,
    BoundryLinkPaginationComponent,
    ChangeEventPaginationComponent,
    SepratedPaginationComponent,
    RoundedPaginationComponent,
    BasicButtonComponent,
    OutlineButtonComponent,
    PillButtonComponent,
    SizeButtonComponent,
    LinkButtonComponent,
    StateButtonComponent,
    BasicTabComponent,
    TabsComponent,
    HorizontalFullTabsComponent,
    DropdownComponent,
    BasicDropdownComponent,
    VarientDropdownComponent,
    SplitDropdownComponent,
    PositionDropdownComponent,
    VerticalTabComponent,
    FullWidthTabComponent,
    AccordionsComponent,
    BasicAccordionComponent,
    StyleAccordionComponent,
    DynamicAccordionComponent,
    OnlyOneAccordionComponent,
    CarouselComponent,
    BasicCarouselComponent,
    DynamicCarouselComponent,
    CaptionCarouselComponent,
    CustomCarouselComponent,
    PopupModalComponent,
    BasicModalComponent,
    NestedModalComponent,
    SizeModalComponent,
    AutoModalComponent,
    SpinnersComponent,
    BasicSpinnerComponent,
    ColorsSpinnerComponent,
    ButtonSpinnerComponent,
    GlowSpinnerComponent,
    SizeSpinnerComponent,
    AlignmentSpinnerComponent,
    BadgesComponent,
    BasicBadgeComponent,
    VarientBadgeComponent,
    PillBadgeComponent,
    LinkBadgeComponent,
    CardsComponent,
    BasicCardsComponent,
    ImageCardComponent,
    ListCardComponent,
    HeaderFooterCardComponent,
    Style1CardComponent,
    Style2CardComponent,
    Layout1CardComponent,
    Layout2CardComponent,
    CollapseComponent,
    BasicCollapseComponent,
    EventCollapseComponent,
    ManualCollapseComponent,
    InlineCollapseComponent,
    TypeaheadComponent,
    BasicTypehedComponent,
    PositionTypehedComponent,
    ItemTemplateTypehedComponent,
    AsyncDataTypehedComponent,
    NavbarComponent,
    BasicNavbarComponent,
    ColorSchemeNavbarComponent,
    TogglerNavbarComponent,
    BrandNavbarComponent,
    ListComponent,
    BasicListComponent,
    ActiveItemListComponent,
    DisableItemListComponent,
    LinkButtonListComponent,
  ],
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    AlertModule.forRoot(),
    RatingModule.forRoot(),
    ProgressbarModule.forRoot(),
    TypeaheadModule.forRoot(),
    FormsModule,
    SharedModule,
    HighlightModule,
    ReactiveFormsModule,
    UiElementsRoutingModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        lineNumbersLoader: () => null,
      },
    },
  ],
})
export class UiElementsModule {}
