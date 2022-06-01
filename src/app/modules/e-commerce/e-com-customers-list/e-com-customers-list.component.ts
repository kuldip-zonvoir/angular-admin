import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-com-customers-list',
  templateUrl: './e-com-customers-list.component.html',
  styleUrls: ['./e-com-customers-list.component.scss']
})
export class EComCustomersListComponent implements OnInit {
  taskDialog: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  showTask() {
    this.taskDialog = true;
  }
}
