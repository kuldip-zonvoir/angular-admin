import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import * as objectPath from "object-path";
import { customizeTheme } from "./data_madals/custom-theme";
@Injectable({
  providedIn: "root",
})
export class ThemeService {
  constructor(public sanitizer: DomSanitizer) {}
  getProp(path: string): any {
    return objectPath.get(customizeTheme, path);
  }
  getThemeUrl() {
    const theme = "light-default";
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${theme}.css`);
  }
}
