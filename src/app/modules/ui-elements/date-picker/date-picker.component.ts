import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  myDateValue: Date;
  mytime: Date = new Date();

  colorTheme = 'theme-green';
  constructor() { }

  ngOnInit(): void {
  }

}
