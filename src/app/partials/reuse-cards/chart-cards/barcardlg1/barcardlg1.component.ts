import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/partials/core/config.service";

@Component({
  selector: "app-barcardlg1",
  templateUrl: "./barcardlg1.component.html",
  styleUrls: ["./barcardlg1.component.scss"],
})
export class Barcardlg1Component implements OnInit {
  chartColor = "";

  constructor(private _config: ConfigService) {
    this.chartColor = this._config.getProp(
      "customSetting.colors.theme.light.purple"
    );
  }

  ngOnInit(): void {}
}
