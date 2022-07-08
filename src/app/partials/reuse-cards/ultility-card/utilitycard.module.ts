import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilCardBorderTop1Component } from "./util-card-border-top1/util-card-border-top1.component";
import { UtilCardBorderTop2Component } from "./util-card-border-top2/util-card-border-top2.component";
import { UtilCardBorderTop3Component } from "./util-card-border-top3/util-card-border-top3.component";
import { UtilCardBorderTop4Component } from "./util-card-border-top4/util-card-border-top4.component";
import { UtilCardBorderLeft2Component } from "./util-card-border-left2/util-card-border-left2.component";
import { UtilCardBorderLeft3Component } from "./util-card-border-left3/util-card-border-left3.component";
import { UtilCardBorderLeft4Component } from "./util-card-border-left4/util-card-border-left4.component";
import { UtilCardBorderRight1Component } from "./util-card-border-right1/util-card-border-right1.component";
import { UtilCardBorderRight2Component } from "./util-card-border-right2/util-card-border-right2.component";
import { UtilCardBorderRight3Component } from "./util-card-border-right3/util-card-border-right3.component";
import { UtilCardBorderRight4Component } from "./util-card-border-right4/util-card-border-right4.component";
import { UtilCardProgressBar1Component } from "./util-card-progress-bar1/util-card-progress-bar1.component";
import { UtilCardProgressBar2Component } from "./util-card-progress-bar2/util-card-progress-bar2.component";
import { UtilCardProgressBar3Component } from "./util-card-progress-bar3/util-card-progress-bar3.component";
import { UtilCardProgressBar4Component } from "./util-card-progress-bar4/util-card-progress-bar4.component";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { CardSvgComponent } from "./card-svg/card-svg.component";
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [
    UtilCardBorderTop1Component,

    UtilCardBorderTop2Component,

    UtilCardBorderTop3Component,

    UtilCardBorderTop4Component,


    UtilCardBorderLeft2Component,

    UtilCardBorderLeft3Component,

    UtilCardBorderLeft4Component,

    UtilCardBorderRight1Component,

    UtilCardBorderRight2Component,

    UtilCardBorderRight3Component,

    UtilCardBorderRight4Component,

    UtilCardProgressBar1Component,

    UtilCardProgressBar2Component,

    UtilCardProgressBar3Component,

    UtilCardProgressBar4Component,

    CardSvgComponent,
     ProjectCardComponent,
  ],
  imports: [CommonModule, ProgressbarModule.forRoot()],
  exports: [
    UtilCardBorderTop1Component,
    CardSvgComponent,
    ProjectCardComponent,
    UtilCardBorderTop2Component,

    UtilCardBorderTop3Component,

    UtilCardBorderTop4Component,

    UtilCardBorderLeft2Component,

    UtilCardBorderLeft3Component,

    UtilCardBorderLeft4Component,

    UtilCardBorderRight1Component,

    UtilCardBorderRight2Component,

    UtilCardBorderRight3Component,

    UtilCardBorderRight4Component,

    UtilCardProgressBar1Component,

    UtilCardProgressBar2Component,

    UtilCardProgressBar3Component,

    UtilCardProgressBar4Component,
  ],
})
export class UtilityCardsModule {}
