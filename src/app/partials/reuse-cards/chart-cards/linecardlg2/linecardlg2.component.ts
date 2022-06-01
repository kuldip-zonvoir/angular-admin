import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/partials/core/config.service";

@Component({
  selector: "app-linecardlg2",
  templateUrl: "./linecardlg2.component.html",
  styleUrls: ["./linecardlg2.component.scss"],
})
export class Linecardlg2Component implements OnInit {
  chartHeight = 100;
  chartWidth = 400;
  chartColor = "";
  constructor(private _config: ConfigService) {
    this.chartColor = this._config.getProp(
      "customSetting.colors.theme.light.success"
    );
  }

  ngOnInit(): void {}
}
