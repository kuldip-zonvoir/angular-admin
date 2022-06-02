import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarModule } from "primeng/sidebar";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharemeService } from "./partials/core/shareme.service";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { HIGHLIGHT_OPTIONS } from "ngx-highlightjs";
import { NgApexchartsModule } from "ng-apexcharts";
import { ThemeService } from "./partials/core/theme.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgApexchartsModule,
    SidebarModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],

  providers: [
    SharemeService,
    ThemeService,

    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import("highlight.js"),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
