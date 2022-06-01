import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern',
  templateUrl: './modern.component.html',
  styleUrls: ['./modern.component.scss']
})
export class ModernComponent implements OnInit {
  chartHeight = 100;
  chartWidth = 400;
  chartColor = '#008ffb';
  constructor() { }

  ngOnInit(): void {
  }

}
