import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  backToInvoice() {
    this.route.navigate(['./invoices/invoice-lists']);
  }
  updateInvoice() {
    this.route.navigate(['./invoices/add-invoice']);
  }
}
