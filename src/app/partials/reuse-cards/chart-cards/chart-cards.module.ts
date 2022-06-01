import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Linecardlg1Component } from './linecardlg1/linecardlg1.component';
import { Linecardlg2Component } from './linecardlg2/linecardlg2.component';
import { Linecardlg3Component } from './linecardlg3/linecardlg3.component';
import { Linecardsm1Component } from './linecardsm1/linecardsm1.component';
import { Linecardsm2Component } from './linecardsm2/linecardsm2.component';
import { Linecardsm3Component } from './linecardsm3/linecardsm3.component';
import { Linecardsm4Component } from './linecardsm4/linecardsm4.component';
import { Barcardsm1Component } from './barcardsm1/barcardsm1.component';
import { Barcardsm2Component } from './barcardsm2/barcardsm2.component';
import { Barcardsm3Component } from './barcardsm3/barcardsm3.component';
import { Barcardsm4Component } from './barcardsm4/barcardsm4.component';
import { Areacardsm1Component } from './areacardsm1/areacardsm1.component';
import { Areacardsm2Component } from './areacardsm2/areacardsm2.component';
import { Areacardsm3Component } from './areacardsm3/areacardsm3.component';
import { Areacardsm4Component } from './areacardsm4/areacardsm4.component';
import { SparkLineModule } from '../../layouts/sparkline-components/sparkline.module';
import { Barcardlg1Component } from './barcardlg1/barcardlg1.component';
import { Barcardlg2Component } from './barcardlg2/barcardlg2.component';
import { Barcardlg3Component } from './barcardlg3/barcardlg3.component';
import { LinelgCard1Component } from './linelg-card1/linelg-card1.component';
import { LinelgCard2Component } from './linelg-card2/linelg-card2.component';
import { LinelgCard3Component } from './linelg-card3/linelg-card3.component';
import { PieCardLg1Component } from './pie-card-lg1/pie-card-lg1.component';
import { DonutCardLg1Component } from './donut-card-lg1/donut-card-lg1.component';
import { RadialCardLg1Component } from './radial-card-lg1/radial-card-lg1.component';




@NgModule({
    declarations: [
        Linecardlg1Component,
        Linecardlg2Component,
        Linecardlg3Component,
        Linecardsm1Component,
        Linecardsm2Component,
        Linecardsm3Component,
        Linecardsm4Component,
        Barcardsm1Component,
        Barcardsm2Component,
        Barcardsm3Component,
        Barcardsm4Component,
        Areacardsm1Component,
        Areacardsm2Component,
        Areacardsm3Component,
        Areacardsm4Component,
        Barcardlg1Component,
        Barcardlg2Component,
        Barcardlg3Component,
        LinelgCard1Component,
        LinelgCard2Component,
        LinelgCard3Component,
        PieCardLg1Component,
        DonutCardLg1Component,
        RadialCardLg1Component
    ],
    imports: [
        CommonModule,
        SparkLineModule
    ],
    exports: [
        Linecardlg1Component,
        Linecardlg2Component,
        Linecardlg3Component,
        Linecardsm1Component,
        Linecardsm2Component,
        Linecardsm3Component,
        Linecardsm4Component,
        Barcardsm1Component,
        Barcardsm2Component,
        Barcardsm3Component,
        Barcardsm4Component,
        Areacardsm1Component,
        Areacardsm2Component,
        Areacardsm3Component,
        Areacardsm4Component,
        Barcardlg1Component,
        Barcardlg2Component,
        Barcardlg3Component,
        LinelgCard1Component,
        LinelgCard2Component,
        LinelgCard3Component,
        PieCardLg1Component,
        DonutCardLg1Component,
        RadialCardLg1Component
    ],

})
export class ChartCardsModule { }