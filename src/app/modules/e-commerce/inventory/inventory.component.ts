import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  taskDialog: boolean;
  isCompleted: boolean;
  bsValue = new Date();
  imageSrc: string;
  filename: string;
  filetype: string;
  filesize: number;
  error: string;
  dragAreaClass: string;
  taskName = "Create the landing page on the beta channel"
  taskDetails = " lorem qui ipsum deserunt duis exercitation lorem elit qui qui ipsum tempor nulla velit aliquip enim consequat incididunt pariatur duis excepteur elit irure nulla ipsum dolor dolore est."
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }
  saveFiles(files: FileList) {

    if (files.length > 1) this.error = "Only one file at time allow";
    else {
      this.error = "";
      this.filename = files[0].name,
        this.filesize = files[0].size,
        this.filetype = files[0].type
    }
  }
  selectFile(event) {
    console.log(event)
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }

  showTask() {
    this.taskDialog = true;
  }
  Inventory = [
    {
      orderId: 'SKU-345-356',
      image: 'assets/media/images/Products/watch-.jpg',
      productName: "Wintage Watch",

      vendor: "Jeorge Allen",
      stock: "15",
      status: 'active',
      amount: "581.90"
    },
    {
      orderId: 'SKU-455-356',
      image: 'assets/media/images/Products/watch-.jpg',
      productName: "Watch",
      vendor: "Barry Allen",
      stock: "26",
      status: 'inactive',

      amount: "830.00"
    },
    {
      orderId: 'SKU-345-356',
      image: 'assets/media/images/Products/watch-.jpg',
      productName: "T-shirt",
      vendor: "Barry Allen",
      stock: "26",
      status: 'active',
      amount: "634.90"
    },
    {
      orderId: 'SKU-353-356',
      image: 'assets/media/images/Products/watch-.jpg',
      productName: "shirt",
      vendor: "Barry Allen",
      stock: "66",
      status: 'active',
      amount: "580.00"
    },
    {
      orderId: 'SKU-745-826',
      image: 'assets/media/images/Products/watch-.jpg',
      productName: "Toys",
      vendor: "Raj Mukherji",
      stock: "25",
      status: 'active',
      amount: "500.00"
    },
    {
      orderId: 'SKU-345-356',
      image: 'assets/media/images/Products/watch-.jpg',
      productName: "Electronic",

      vendor: "Jeorge Allen",
      stock: "15",
      status: 'active',
      amount: "581.90"
    },
    {
      orderId: 'SKU-455-356',
      image: 'assets/media/images/Products/watch-.jpg',
      productName: "Bracelet",
      vendor: "Barry Allen",
      stock: "26",
      status: 'inactive',

      amount: "830.00"
    },
    {
      orderId: 'SKU-345-356',
      image: 'assets/media/images/Products/watch-.jpg',
      productName: "Jeans",
      vendor: "Barry Allen",
      stock: "26",
      status: 'active',
      amount: "634.90"
    },
    {
      orderId: 'SKU-353-356',
      image: 'assets/media/images/Products/watch-.jpg',
      productName: "Clothes",
      vendor: "Barry Allen",
      stock: "26",
      status: 'active',
      amount: "580.00"
    },
    {
      orderId: 'SKU-745-826',
      image: 'assets/media/images/Products/watch-.jpg',
      productName: "toys",
      vendor: "Raj Mukherji",
      stock: "26",
      status: 'active',
      amount: "500.00"
    },
  ]
}
