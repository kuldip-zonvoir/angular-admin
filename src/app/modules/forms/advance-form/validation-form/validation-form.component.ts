import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.scss']
})
export class ValidationFormComponent implements OnInit {
  form: FormGroup;
  stepId = '1'
  constructor(
    private fb: FormBuilder
  ) { }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      mobile: ['', [Validators.required, Validators.min(5), Validators.max(10)]],
      product_name: ['', [Validators.required]],
      office_email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      phone: ['', [Validators.required, Validators.min(5), Validators.max(10)]],
      company_name: ['', [Validators.required,]],
      post_name: ['', [Validators.required]],
      vendor_name: ['', Validators.required],
      category_name: ['', [Validators.required]],
      salery: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      number: ['', [Validators.required, Validators.min(5), Validators.max(10)]],
      pincode: ['', [Validators.required, Validators.maxLength(6)]],
      zipcode: ['', [Validators.required]],
      language: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      address: ['', [Validators.required]],
      landmark: ['', [Validators.required]],
    })
  }
  saveDetail() {

  }

}
