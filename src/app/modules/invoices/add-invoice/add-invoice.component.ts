import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-invoice",
  templateUrl: "./add-invoice.component.html",
  styleUrls: ["./add-invoice.component.scss"],
})
export class AddInvoiceComponent implements OnInit {
  inviceStatus = [];
  selectedStatus: string;
  constructor(private route: Router) {
    this.inviceStatus = [
      {
        value: "0",
        label: "Delivered",
      },
      {
        value: "1",
        label: "Shipped",
      },
      {
        value: "2",
        label: "Pending",
      },
    ];
  }

  ngOnInit(): void {}
  backToInvoice() {
    this.route.navigate(["./invoices/invoice-lists"]);
  }
}
