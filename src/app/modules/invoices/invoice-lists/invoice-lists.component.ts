import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-lists',
  templateUrl: './invoice-lists.component.html',
  styleUrls: ['./invoice-lists.component.scss']
})
export class InvoiceListsComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  addInvoice() {
    this.route.navigate(['./invoices/add-invoice']);
  }
}
