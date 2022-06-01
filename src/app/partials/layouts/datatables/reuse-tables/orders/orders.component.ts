import { Component, OnInit } from "@angular/core";
import { FakeApiService } from "src/app/partials/core/fake_api.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit {
  showBoundaryLinks = true;
  orders = [];
  orderDetail: boolean;
  constructor(private _fakeApi: FakeApiService) {}

  ngOnInit(): void {
    this.orders = this._fakeApi.getOrders();
  }
  editOrder(id: string) {
    this.orderDetail = true;
  }
  // order modal close
  closeModal() {
    this.orderDetail = false;
  }
  updateOrder() {
    this.orderDetail = false;
  }
  deleteOrder(id: string) {}
  termsPara = [
    {
      id: "0",
      para_name: "All ",
    },
    {
      id: "1",
      para_name: "Deliverd",
    },
    {
      id: "2",
      para_name: "Canceled",
    },
    {
      id: "3",
      para_name: "Processing",
    },
  ];
  termsPara2 = [
    {
      id: "0",
      para_name: "All ",
    },
    {
      id: "1",
      para_name: "Recieved",
    },
    {
      id: "2",
      para_name: "Canceled",
    },
    {
      id: "3",
      para_name: "Pending",
    },
  ];
  termsPara3 = [
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
