import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-checkbox',
  templateUrl: './radio-checkbox.component.html',
  styleUrls: ['./radio-checkbox.component.scss']
})
export class RadioCheckboxComponent implements OnInit {
  isDisable = true;
  isChecked = true;
  constructor() { }

  ngOnInit(): void {
  }

}
