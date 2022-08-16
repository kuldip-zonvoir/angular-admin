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
        // usa
        {
          long: -80.508137,
          lat: 39.641312,
        },
        // india
        {
          long: 77.947998,
          lat: 23.473324,
        },
        // france
        {
          long: 2.349014,
          lat: 48.864716,
        },
        // itly
        {
          long: 12.496366,
          lat: 41.902782,
        },
        {
          long: 56.0,
          lat: 54.733334,
        },
        {
          long: 140.35984,
          lat: 37.40032,
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
