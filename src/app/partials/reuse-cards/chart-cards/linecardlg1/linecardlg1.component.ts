import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/partials/core/config.service";

@Component({
  selector: "app-linecardlg1",
  templateUrl: "./linecardlg1.component.html",
  styleUrls: ["./linecardlg1.component.scss"],
})
export class Linecardlg1Component implements OnInit {
  chartHeight = 100;
  chartWidth = 400;
  chartColor = "";
  constructor(private _config: ConfigService) {
    this.chartColor = this._config.getProp(
      "customSetting.colors.theme.light.primary"
    );
  }

  ngOnInit(): void {}
}
