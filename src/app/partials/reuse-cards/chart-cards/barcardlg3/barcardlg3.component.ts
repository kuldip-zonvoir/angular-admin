import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/partials/core/config.service";

@Component({
  selector: "app-barcardlg3",
  templateUrl: "./barcardlg3.component.html",
  styleUrls: ["./barcardlg3.component.scss"],
})
export class Barcardlg3Component implements OnInit {
  chartColor = "#000";

  constructor(private _config: ConfigService) {
    this.chartColor = this._config.getProp(
      "customSetting.colors.theme.light.danger"
    );
  }

  ngOnInit(): void {}
}
