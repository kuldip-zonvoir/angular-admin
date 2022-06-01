import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { ErrorsComponent } from './errors.component';
import { ErrorComponent } from './error/error.component';
import { Error1Component } from './error1/error1.component';
import { MaintinanaceComponent } from './maintinanace/maintinanace.component';



@NgModule({
  declarations:
    [ErrorsComponent,
      ErrorComponent,
      Error1Component,
      MaintinanaceComponent,
    ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
