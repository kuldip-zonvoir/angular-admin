import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/partials/core/config.service";

@Component({
  selector: "app-barcardlg2",
  templateUrl: "./barcardlg2.component.html",
  styleUrls: ["./barcardlg2.component.scss"],
})
export class Barcardlg2Component implements OnInit {
  chartColor:String;

  constructor(private _config: ConfigService) {
    this.chartColor = this._config.getProp(
      "customSetting.colors.theme.light.purple"
    );
  }

  ngOnInit(): void {}
}
