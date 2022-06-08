import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductsComponent } from "./products/products.component";
import { ECommerceComponent } from "./e-commerce.component";

import { EComCouponsListComponent } from "./e-com-coupons-list/e-com-coupons-list.component";
import { EComInventoryListComponent } from "./e-com-inventory-list/e-com-inventory-list.component";
import { EComCustomersListComponent } from "./e-com-customers-list/e-com-customers-list.component";
import { EComCategoryListComponent } from "./e-com-category-list/e-com-category-list.component";
import { EComOrdersListComponent } from "./e-com-orders-list/e-com-orders-list.component";
import { EComCartProductComponent } from "./e-com-cart-product/e-com-cart-product.component";
import { EComCheckoutComponent } from "./e-com-checkout/e-com-checkout.component";
import { EComEditProductComponent } from "./e-com-edit-product/e-com-edit-product.component";
import { EComProductDetailComponent } from "./e-com-product-detail/e-com-product-detail.component";

const routes: Routes = [
  {
    path: "",
    component: ECommerceComponent,
    children: [
      {
        path: "cart",
        component: EComCartProductComponent,
        data: { breadcrumb: "Cart" },
      },
      {
        path: "checkout",
        component: EComCheckoutComponent,
        data: { breadcrumb: "Checkout" },
      },
      {
        path: "edit-product",
        component: EComEditProductComponent,
        data: { breadcrumb: "Edit Product" },
      },
      {
        path: "product-detail",
        component: EComProductDetailComponent,
        data: { breadcrumb: "Product Details" },
      },
      {
        path: "coupons",
        component: EComCouponsListComponent,
        data: { breadcrumb: "Coupons" },
      },
      {
        path: "inventory",
        component: EComInventoryListComponent,
        data: { breadcrumb: "Inventory" },
      },
      {
        path: "customers",
        component: EComCustomersListComponent,
        data: { breadcrumb: "Customers" },
      },
      {
        path: "products",
        component: ProductsComponent,
        data: { breadcrumb: "Products" },
      },
      {
        path: "category",
        component: EComCategoryListComponent,
        data: { breadcrumb: "Category" },
      },
      {
        path: "orders",
        component: EComOrdersListComponent,
        data: { breadcrumb: "Orders" },
      },
      {
        path: "",
        redirectTo: "/products",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECommerceRoutingModule {}
