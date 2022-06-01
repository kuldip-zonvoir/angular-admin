import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filled-icons',
  templateUrl: './filled-icons.component.html',
  styleUrls: ['./filled-icons.component.scss']
})
export class FilledIconsComponent implements OnInit {
  @Input() iconbox: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
