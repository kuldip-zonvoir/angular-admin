import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-e-com-edit-product",
  templateUrl: "./e-com-edit-product.component.html",
  styleUrls: ["./e-com-edit-product.component.scss"],
})
export class EComEditProductComponent implements OnInit {
  isChecked: boolean;
  categories = [];
  selectedCategory: string;
  subCategories = [];
  selectedSubCategory: string;
  deliveryStatusArr = [];
  selectedStatus: string;
  ISIcertftArr = [];
  selectedCert: string;
  product_desc =
    "Lorem ipsum dolor sit, amet quibusdam possimus totam facere nesciunt soluta quidem nobis suscipit consequuntur? Dignissimos id nemo nesciunt amet laborum a vitae eius dolore, deserunt, doloremque aliquam optio cumque voluptate enim?";
  constructor() {
    this.categories = [
      {
        value: "0",
        label: "Electronics",
      },
      {
        value: "1",
        label: "Fashion",
      },
      {
        value: "2",
        label: "Grocery",
      },
    ];
    this.subCategories = [
      {
        value: "0",
        label: "Mobiles",
      },
      {
        value: "1",
        label: "clothes",
      },
      {
        value: "2",
        label: "Accessories",
      },
      {
        value: "3",
        label: "Footwear",
      },
    ];
    this.deliveryStatusArr = [
      {
        value: "0",
        label: "Devlieverd",
      },
      {
        value: "1",
        label: "Shipped",
      },
      {
        value: "2",
        label: "Out For Delivery",
      },
      {
        value: "3",
        label: "Cancelled",
      },
    ];
    this.ISIcertftArr = [
      {
        value: "0",
        label: "Yes",
      },
      {
        value: "1",
        label: "No",
      },
    ];
  }
  uploadFile(event) {}
  ngOnInit(): void {}
}
