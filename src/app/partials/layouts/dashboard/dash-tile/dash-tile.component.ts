import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-tile',
  templateUrl: './dash-tile.component.html',
  styleUrls: ['./dash-tile.component.scss']
})
export class DashTileComponent implements OnInit {
  @Input() values: any = {}
  inc = false;
  decr = false;
  constructor() { }

  ngOnInit(): void {
  }

}
