import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/partials/core/config.service";

@Component({
  selector: "app-linecardlg3",
  templateUrl: "./linecardlg3.component.html",
  styleUrls: ["./linecardlg3.component.scss"],
})
export class Linecardlg3Component implements OnInit {
  chartHeight = 100;
  chartWidth = 400;
  chartColor = "";
  constructor(private _config: ConfigService) {
    this.chartColor = this._config.getProp(
      "customSetting.colors.theme.light.purple"
    );
  }

  ngOnInit(): void {}
}
