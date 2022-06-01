import { Component, OnInit } from "@angular/core";
import { EComCategoryService } from "src/app/partials/core/services/e-com-category.service";

@Component({
  selector: "app-e-com-category-list",
  templateUrl: "./e-com-category-list.component.html",
  styleUrls: ["./e-com-category-list.component.scss"],
})
export class EComCategoryListComponent implements OnInit {
  categoryDialog: boolean;
  constructor(private _categoryService: EComCategoryService) {}

  ngOnInit(): void {}
  addCategory() {
    this.categoryDialog = true;
    this._categoryService.toggleCategoryModal(this.categoryDialog);
  }
}
