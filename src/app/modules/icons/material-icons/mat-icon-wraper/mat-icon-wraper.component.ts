import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-icon-wraper',
  templateUrl: './mat-icon-wraper.component.html',
  styleUrls: ['./mat-icon-wraper.component.scss']
})
export class MatIconWraperComponent implements OnInit {
  @Input() iconbox: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
