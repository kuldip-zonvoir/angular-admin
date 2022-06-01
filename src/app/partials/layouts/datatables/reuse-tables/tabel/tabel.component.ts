import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.scss']
})
export class TabelComponent implements OnInit {
  dropdownFlip = false;
  constructor(
  ) { }

  ngOnInit(): void {
  }
  clickOutside() {
    this.dropdownFlip = false;
  }
  Inventory = [
    {
      orderId: '345-356',
      productName: "seeds",
      ship_date: "23 January 2021",
      vendor: "Jeorge Allen",
      category: "Fashion",
      status: 'pending',
      payment: 'pending',
      amount: "581.90"
    },
    {
      orderId: '455-356',
      productName: "laptop",
      ship_date: "29 oct 2020",
      vendor: "Barry Allen",
      category: "Electronic",
      status: 'delivered',
      payment: 'waiting',
      amount: "830.00"
    },
    {
      orderId: '345-356',
      productName: "Appliances",
      ship_date: "23 March 2021",
      vendor: "Barry Allen",
      category: "Electronic",
      status: 'Shipped',
      payment: 'Recieved',
      amount: "634.90"
    },
    {
      orderId: '353-356',
      productName: "Clothes",
      ship_date: "24 April 2021",
      vendor: "Barry Allen",
      category: "Electronic",
      status: 'Shipped',
      payment: 'Recieved',
      amount: "580.00"
    },
    {
      orderId: '745-826',
      productName: "toys",
      ship_date: "23 March 2021",
      vendor: "Raj Mukherji",
      category: "Electronic",
      status: 'Shipped',
      payment: 'Recieved',
      amount: "500.00"
    },
    {
      orderId: '345-356',
      productName: "seeds",
      ship_date: "23 January 2021",
      vendor: "Jeorge Allen",
      category: "Fashion",
      status: 'pending',
      payment: 'pending',
      amount: "581.90"
    },
    {
      orderId: '455-356',
      productName: "laptop",
      ship_date: "29 oct 2020",
      vendor: "Barry Allen",
      category: "Electronic",
      status: 'delivered',
      payment: 'waiting',
      amount: "830.00"
    },
  ]
}
