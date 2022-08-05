
import { Component, Input, OnInit,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {
  @Input('custom-Dropdown') dropdownItems:any = {}; 
  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onMenuClickHandller(type) {
    this.parentFun.emit(type);
  }

}
