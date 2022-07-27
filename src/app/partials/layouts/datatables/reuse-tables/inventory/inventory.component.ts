import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FakeApiService } from "src/app/partials/core/fake_api.service";
import { EComProductsService } from "src/app/partials/core/services/e-com-products.service";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"],
})
export class InventoryComponent implements OnInit {
  confirmDialog: boolean;
  isAscending: boolean;
  popupId: string;
  isCompleted: boolean;
  isConfirmed: boolean;
  bsValue = new Date();
  imageSrc: string;
  filename: string;
  filetype: string;
  filesize: number;
  error: string;
  inventoryList = [];
  dragAreaClass: string;
  taskName = "Create the landing page on the beta channel";
  taskDetails =
    " lorem qui ipsum deserunt duis exercitation lorem elit qui qui ipsum tempor nulla velit aliquip enim consequat incididunt pariatur duis excepteur elit irure nulla ipsum dolor dolore est.";
  constructor(
    private _productService: EComProductsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.inventoryList = this._productService.getProducts();
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
      (this.filename = files[0].name),
        (this.filesize = files[0].size),
        (this.filetype = files[0].type);
    }
  }
  selectFile(event) {
    console.log(event);
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
  editProduct(id: string) {
    this._router.navigate(["/e-commerce/edit-product"]);
  }
  deleteProduct(id: string) {
    this.confirmDialog = true;
    this.popupId = id;
  }
  confirmDelete(id) {
    console.log(id);
    this.confirmDialog = false;
    this._productService.deleteProduct(id);
  }
  cancelDelete() {
    this.confirmDialog = false;
  }
  arrangeData() {
    this.isAscending = !this.isAscending;
  }
  // dropdown

  termsPara = [
    {
      id: "0",
      para_name: "All ",
    },
    {
      id: "1",
      para_name: "In Stock",
    },
    {
      id: "2",
      para_name: "Out of Stock",
    },
  ];
}
