import {
  Component,
  OnInit,
  Inject,
  NgZone,
  PLATFORM_ID,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

// amCharts imports
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: "app-vector-map1",
  templateUrl: "./vector-map1.component.html",
  styleUrls: ["./vector-map1.component.scss"],
})
export class VectorMap1Component implements AfterViewInit, OnDestroy {
  private root: am5.Root;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("chartdiv");
      // am5geodata_worldLow
      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: "none",
          panY: "none",
          projection: am5map.geoNaturalEarth1(),
        })
      );

      // Create polygon series
      var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          exclude: ["AQ"],
        })
      );

      // Create point series
      var pointSeries = chart.series.push(
        am5map.MapPointSeries.new(root, {
          latitudeField: "lat",
          longitudeField: "long",
        })
      );

      pointSeries.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 5,
            fill: am5.color(0xf7284a),
          }),
        });
      });

      pointSeries.data.setAll([
        {
          long: -73.778137,
          lat: 40.641312,
        },
        {
          long: -0.454296,
          lat: 51.47002,
        },
        {
          long: 116.597504,
          lat: 40.072498,
        },
        {
          long: -56.778137,
          lat: 10.641312,
        },
        {
          long: -0.1204296,
          lat: 77.47002,
        },
        {
          long: 120.597504,
          lat: 88.072498,
        },
      ]);
      this.root = root;
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}
