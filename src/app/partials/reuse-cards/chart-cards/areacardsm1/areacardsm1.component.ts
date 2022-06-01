import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-areacardsm1',
  templateUrl: './areacardsm1.component.html',
  styleUrls: ['./areacardsm1.component.scss']
})
export class Areacardsm1Component implements OnInit {
  chartColor = "#42b446";
  @Input('customTile') mytile: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
