import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wigits',
  templateUrl: './form-wigits.component.html',
  styleUrls: ['./form-wigits.component.scss']
})
export class FormWigitsComponent implements OnInit {
  isDisable = true;
  isChecked = true;
  constructor() { }
  ngOnInit(): void {
  }
  selectFile(event) {

  }
}
