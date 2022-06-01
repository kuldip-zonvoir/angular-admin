import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FakeApiService } from "src/app/partials/core/fake_api.service";

@Component({
  selector: "app-invoice-tabel",
  templateUrl: "./invoice-tabel.component.html",
  styleUrls: ["./invoice-tabel.component.scss"],
})
export class InvoiceTabelComponent implements OnInit {
  Invoices = [];
  constructor(private route: Router, private _fakeApi: FakeApiService) {}

  ngOnInit(): void {
    this.Invoices = this._fakeApi.getInvoice();
  }
  showInvoice() {
    this.route.navigate(["./invoices/invoice"]);
  }
  deleteInvoice() {}
  termsPara = [
    {
      id: "0",
      para_name: "All ",
    },
    {
      id: "1",
      para_name: "Pending",
    },
    {
      id: "2",
      para_name: "Deliverd",
    },
    {
      id: "3",
      para_name: "Shipped",
    },
  ];
}
