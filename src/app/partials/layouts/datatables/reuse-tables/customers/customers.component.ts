import { Component, OnInit } from "@angular/core";
import { FakeApiService } from "src/app/partials/core/fake_api.service";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"],
})
export class CustomersComponent implements OnInit {
  showBoundaryLinks = true;
  taskDialog: boolean;
  customerDetail: boolean;
  customerList = [];
  today: Date;
  constructor(private _fakeApi: FakeApiService) {
    this.today = new Date();
  }

  ngOnInit(): void {
    this.customerList = this._fakeApi.getCustomers();
  }
  showTask() {
    this.taskDialog = true;
  }
  // close modal
  closeModal() {
    this.customerDetail = false;
  }
  editCustomer(id: string) {
    this.customerDetail = true;
  }
  deleteCustomer(id: string) {}
  updateCustomer() {
    this.customerDetail = false;
  }
  termsPara = [
    {
      id: "0",
      para_name: "All ",
    },
    {
      id: "1",
      para_name: "Date",
    },
    {
      id: "2",
      para_name: "Order",
    },
    {
      id: "3",
      para_name: "Reward",
    },
  ];
  termsPara2 = [
    {
      id: "0",
      para_name: "All ",
    },
    {
      id: "1",
      para_name: "Today",
    },
    {
      id: "2",
      para_name: "Last Day",
    },
    {
      id: "3",
      para_name: "Last Week",
    },
    {
      id: "4",
      para_name: "Last Month",
    },
  ];
}
