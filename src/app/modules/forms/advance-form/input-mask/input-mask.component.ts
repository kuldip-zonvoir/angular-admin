import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.scss']
})
export class InputMaskComponent implements OnInit {
  form: FormGroup;
  date: string;
  card: string;
  mobile: string;
  stepId = '1'
  constructor(
    private fb: FormBuilder
  ) { }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  ngOnInit(): void {
    this.form = this.fb.group({

    })
  }
  saveDetail(value) {
    console.log(value.value);

  }
}
