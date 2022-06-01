import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-e-com-edit-product",
  templateUrl: "./e-com-edit-product.component.html",
  styleUrls: ["./e-com-edit-product.component.scss"],
})
export class EComEditProductComponent implements OnInit {
  isChecked: boolean;
  product_desc =
    "Lorem ipsum dolor sit, amet quibusdam possimus totam facere nesciunt soluta quidem nobis suscipit consequuntur? Dignissimos id nemo nesciunt amet laborum a vitae eius dolore, deserunt, doloremque aliquam optio cumque voluptate enim?";
  constructor() {}
  uploadFile(event) {}
  ngOnInit(): void {}
}
