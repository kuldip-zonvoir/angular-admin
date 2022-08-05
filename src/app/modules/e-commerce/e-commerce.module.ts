import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ECommerceRoutingModule } from "./e-commerce-routing.module";
import { ECommerceComponent } from "./e-commerce.component";
import { ProductsComponent } from "./products/products.component";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { DialogModule } from "primeng/dialog";
import { DataTabelModule } from "src/app/partials/layouts/datatables/datatabel.module";
import { EComOrdersListComponent } from "./e-com-orders-list/e-com-orders-list.component";
import { EComCustomersListComponent } from "./e-com-customers-list/e-com-customers-list.component";
import { EComCategoryListComponent } from "./e-com-category-list/e-com-category-list.component";
import { EComCouponsListComponent } from "./e-com-coupons-list/e-com-coupons-list.component";
import { EComInventoryListComponent } from "./e-com-inventory-list/e-com-inventory-list.component";
import { EComCheckoutComponent } from "./e-com-checkout/e-com-checkout.component";
import { EComProductDetailComponent } from "./e-com-product-detail/e-com-product-detail.component";
import { EComEditProductComponent } from "./e-com-edit-product/e-com-edit-product.component";
import { EComCartProductComponent } from "./e-com-cart-product/e-com-cart-product.component";
import { ProductGridComponent } from "./product-grid/product-grid.component";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";
import { ProductInCartComponent } from "./e-com-cart-product/product-in-cart/product-in-cart.component";
import { ProductReviewRattingComponent } from "./e-com-product-detail/product-review-ratting/product-review-ratting.component";
import { ProductSpecificationComponent } from "./e-com-product-detail/product-specification/product-specification.component";
import { ProductFaqComponent } from "./e-com-product-detail/product-faq/product-faq.component";
@NgModule({
  declarations: [
    ECommerceComponent,

    ProductsComponent,
    EComOrdersListComponent,
    EComCustomersListComponent,
    EComCategoryListComponent,
    EComCouponsListComponent,
    EComInventoryListComponent,
    EComCheckoutComponent,
    EComProductDetailComponent,
    EComEditProductComponent,
    EComCartProductComponent,
    ProductGridComponent,
    ProductInCartComponent,
    ProductReviewRattingComponent,
    ProductSpecificationComponent,
    ProductFaqComponent,
  ],
  imports: [
    CommonModule,
    DataTabelModule,
    SharedModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    DialogModule,
    ECommerceRoutingModule,
  ],
})
export class ECommerceModule {}
