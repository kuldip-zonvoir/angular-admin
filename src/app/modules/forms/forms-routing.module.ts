import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdvanceFormComponent } from "./advance-form/advance-form.component";
import { FormsComponent } from "./forms.component";
import { MultiSelectComponent } from "./multi-select/multi-select.component";
import { RadioCheckboxComponent } from "./radio-checkbox/radio-checkbox.component";
import { FormWizard2Component } from "./regular/form-wizard2/form-wizard2.component";
import { RegularComponent } from "./regular/regular.component";

const routes: Routes = [
  {
    path: "",
    component: FormsComponent,
    children: [
      {
        path: "regular-forms",
        component: RegularComponent,
        data: { breadcrumb: "Regular Forms" },
      },
      {
        path: "radio-checkbox",
        component: RadioCheckboxComponent,
        data: { breadcrumb: "Radio Checkbox" },
      },
      {
        path: "form-elements",
        component: MultiSelectComponent,
        data: { breadcrumb: "Forms Element" },
      },
      {
        path: "form-wizard",
        component: FormWizard2Component,
        data: { breadcrumb: "Form Wizard" },
      },
      {
        path: "advance-forms",
        component: AdvanceFormComponent,
        data: { breadcrumb: "Advance Forms" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
