import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { Error1Component } from './error1/error1.component';

import { ErrorsComponent } from './errors.component';
import { MaintinanaceComponent } from './maintinanace/maintinanace.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorsComponent,
    children: [
      {
        path: 'error-1',
        component: ErrorComponent
      },
      {
        path: 'error-2',
        component: Error1Component
      },
      {
        path: 'maintinance',
        component: MaintinanaceComponent
      },

      { path: '', redirectTo: 'error-1', pathMatch: 'full' },
      {
        path: '**',
        component: ErrorComponent,
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
