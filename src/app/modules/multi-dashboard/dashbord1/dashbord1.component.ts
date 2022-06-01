import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord1',
  templateUrl: './dashbord1.component.html',
  styleUrls: ['./dashbord1.component.scss']
})
export class Dashbord1Component implements OnInit {
  chartHeight = 100;
  chartWidth = 400;
  chartColor = '#008ffb';
  constructor() { }

  ngOnInit(): void {
  }
  areaTiles = [
    {
      title: 'Total Likes',
      value: '33572',
      color: '#008ffb'
    },
    {
      title: 'Total Views',
      value: '65412',
      color: '#003ff8'
    },
    {
      title: 'Total Comments',
      value: '88200',
      color: '#0ccffb'
    },
    {
      title: 'Total Share',
      value: '56672',
      color: '#00811b'
    },
  ]
}
