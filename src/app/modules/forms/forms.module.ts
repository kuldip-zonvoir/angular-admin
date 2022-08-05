import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsRoutingModule } from "./forms-routing.module";
import { FormsComponent } from "./forms.component";
import { RegularComponent } from "./regular/regular.component";
import { StackedComponent } from "./regular/stacked/stacked.component";
import { HorizontalComponent } from "./regular/horizontal/horizontal.component";
import { InputElementComponent } from "./regular/input-element/input-element.component";
import { FormWigitsComponent } from "./regular/form-wigits/form-wigits.component";
import { FormLayoutComponent } from "./regular/form-layout/form-layout.component";
import { FormWizardComponent } from "./regular/form-wizard/form-wizard.component";
import { FormWizardValidationComponent } from "./regular/form-wizard-validation/form-wizard-validation.component";
import { AdvanceFormComponent } from "./advance-form/advance-form.component";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";
import { DragDropComponent } from "./advance-form/drag-drop/drag-drop.component";
import { MultiDragDropComponent } from "./advance-form/multi-drag-drop/multi-drag-drop.component";
import { ValidationFormComponent } from "./advance-form/validation-form/validation-form.component";
import { InputMaskComponent } from "./advance-form/input-mask/input-mask.component";
import { InputMaskModule } from "primeng/inputmask";
import { InputSwitchComponent } from "./advance-form/input-switch/input-switch.component";
import { InputSwitchModule } from "primeng/inputswitch";
import { TextEditorComponent } from "./advance-form/text-editor/text-editor.component";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { ButtonModule } from "primeng/button";
import { RadioCheckboxComponent } from "./radio-checkbox/radio-checkbox.component";
import { MultiSelectComponent } from "./multi-select/multi-select.component";
import { FormWizard2Component } from "./regular/form-wizard2/form-wizard2.component";
import { AutoCompleteComponent } from "./auto-complete/auto-complete.component";

@NgModule({
  declarations: [
    FormsComponent,
    RegularComponent,
    StackedComponent,
    HorizontalComponent,
    InputElementComponent,
    FormWigitsComponent,
    FormLayoutComponent,
    FormWizardComponent,
    FormWizardValidationComponent,
    AdvanceFormComponent,
    DragDropComponent,
    MultiDragDropComponent,
    ValidationFormComponent,
    InputMaskComponent,
    InputSwitchComponent,
    TextEditorComponent,
    RadioCheckboxComponent,
    MultiSelectComponent,
    FormWizard2Component,
    AutoCompleteComponent,
  ],
  imports: [
    CommonModule,
    AngularEditorModule,
    InputMaskModule,
    InputSwitchModule,
    SharedModule,
    ButtonModule,
    FormsRoutingModule,
  ],
})
export class FormModule {}
