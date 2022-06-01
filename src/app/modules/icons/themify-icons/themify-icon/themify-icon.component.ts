import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-themify-icon',
  templateUrl: './themify-icon.component.html',
  styleUrls: ['./themify-icon.component.scss']
})
export class ThemifyIconComponent implements OnInit {
  @Input() iconbox: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
