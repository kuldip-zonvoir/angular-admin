import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss']
})
export class InputSwitchComponent implements OnInit {
  checked1: boolean = false;

  checked2: boolean = true;
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  saveDetail(value) {

  }
}
