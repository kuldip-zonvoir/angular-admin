import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardSm1Component } from "./crypto-cards/card-sm1/card-sm1.component";
import { CardSm2Component } from "./crypto-cards/card-sm2/card-sm2.component";
import { CardSm3Component } from "./crypto-cards/card-sm3/card-sm3.component";
import { CardLg1Component } from "./crypto-cards/card-lg1/card-lg1.component";
import { CardLg2Component } from "./crypto-cards/card-lg2/card-lg2.component";
import { CardLg3Component } from "./crypto-cards/card-lg3/card-lg3.component";
import { CardSm4Component } from "./crypto-cards/card-sm4/card-sm4.component";
import { SparkLineModule } from "../layouts/sparkline-components/sparkline.module";
import { CustomTimelineDashComponent } from "./crypto-cards/custom-timeline-dash/custom-timeline-dash.component";
import { BrowserStaticsComponent } from "./crypto-cards/browser-statics/browser-statics.component";

@NgModule({
  declarations: [
    CardSm1Component,
    CardSm2Component,
    CardSm3Component,
    CardSm4Component,
    CardLg1Component,
    CardLg2Component,
    CardLg3Component,
    CustomTimelineDashComponent,
    BrowserStaticsComponent,
  ],
  imports: [CommonModule, SparkLineModule],
  exports: [
    CardSm1Component,
    CardSm2Component,
    CardSm3Component,
    CardSm4Component,
    CardLg1Component,
    CardLg2Component,
    CardLg3Component,
    CustomTimelineDashComponent,
    BrowserStaticsComponent,
  ],
})
export class ReUseCardsModule {}
