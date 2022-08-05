import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-wizard-validation',
  templateUrl: './form-wizard-validation.component.html',
  styleUrls: ['./form-wizard-validation.component.scss']
})
export class FormWizardValidationComponent implements OnInit {
  form: FormGroup;
  stepId = '1'
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      company_name: ['', Validators.required],
      post_name: ['', [Validators.required]],
      salery: ['', Validators.required],
      pincode: ['', Validators.required],
      zipcode: ['', Validators.required],
      language: ['', Validators.required],
    })
  }
  saveDetail() {

  }
  changeStep(step) {
    if (step != this.stepId) {
      this.stepId = step;
    }
  }

}
