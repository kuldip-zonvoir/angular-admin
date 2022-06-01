import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-icons',
  templateUrl: './weather-icons.component.html',
  styles: [
  ]
})
export class WeatherIconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Wi_Icons = [
    {
      name: "day-sunny"

    },
    {
      name: "day-cloudy"

    },
    {
      name: "day-cloudy-gusts"

    },
    {
      name: "day-cloudy-windy"

    },
    {
      name: "day-fog"

    },
    {
      name: "day-hail"

    },
    {
      name: "day-haze"

    },
    {
      name: "day-lightning"

    },
    {
      name: "day-rain"

    },
    {
      name: "day-rain-mix"

    },
    {
      name: "day-rain-wind"

    },
    {
      name: "day-showers"

    },
    {
      name: "day-sleet"

    },
    {
      name: "day-sleet-storm"

    },
    {
      name: "day-snow"

    },
    {
      name: "day-snow-thunderstorm"

    },
    {
      name: "day-snow-wind"

    },
    {
      name: "day-sprinkle"

    },
    {
      name: "day-storm-showers"

    },
    {
      name: "day-sunny-overcast"

    },
    {
      name: "day-thunderstorm"

    },
    {
      name: "day-windy"

    },
    {
      name: "solar-eclipse"

    },
    {
      name: "hot"

    },
    {
      name: "day-cloudy-high"

    },
    {
      name: "day-light-wind"

    },
    {
      name: "alien"

    },
    {
      name: "celsius"

    },
    {
      name: "fahrenheit"

    },
    {
      name: "degrees"

    },
    {
      name: "thermometer"

    },
    {
      name: "thermometer-exterior"

    },
    {
      name: "thermometer-internal"

    },
    {
      name: "cloud-down"

    },
    {
      name: "cloud-up"

    },
    {
      name: "cloud-refresh"

    },
    {
      name: "horizon"

    },
    {
      name: "horizon-alt"

    },
    {
      name: "sunrise"

    },
    {
      name: "sunset"

    },
    {
      name: "moonrise"

    },
    {
      name: "moonset"

    },
    {
      name: "refresh"

    },
    {
      name: "refresh-alt"

    },
    {
      name: "umbrella"

    },
    {
      name: "barometer"

    },
    {
      name: "humidity"

    },
    {
      name: "na"

    },
    {
      name: "train"

    },
    {
      name: "cloud"

    },
    {
      name: "cloudy"

    },
    {
      name: "cloudy-gusts"

    },
    {
      name: "cloudy-windy"

    },
    {
      name: "fog"

    },
    {
      name: "hail"

    },
    {
      name: "rain"

    },
    {
      name: "rain-mix"

    },
    {
      name: "rain-wind"

    },
    {
      name: "showers"

    },
    {
      name: "sleet"

    },
    {
      name: "snow"

    },
    {
      name: "sprinkle"

    },
    {
      name: "storm-showers"

    },
    {
      name: "thunderstorm"

    },
    {
      name: "snow-wind"

    },
    {
      name: "snow"

    },
    {
      name: "smog"

    },
    {
      name: "smoke"

    },
    {
      name: "lightning"

    },
    {
      name: "raindrops"

    },
    {
      name: "raindrop"

    },
    {
      name: "dust"

    },
    {
      name: "snowflake-cold"

    },
    {
      name: "windy"

    },
    {
      name: "strong-wind"

    },
    {
      name: "sandstorm"

    },
    {
      name: "earthquake"

    },
    {
      name: "fire"

    },
    {
      name: "flood"

    },
    {
      name: "meteor"

    },
    {
      name: "tsunami"

    },
    {
      name: "volcano"

    },
    {
      name: "hurricane"

    },
    {
      name: "tornado"

    },
    {
      name: "small-craft-advisory"

    },
    {
      name: "gale-warning"

    },
    {
      name: "storm-warning"

    },
    {
      name: "hurricane-warning"

    },
    {
      name: "wind-direction"

    },
    {
      name: "moon-new"

    },

    {
      name: "lunar-eclipse"

    },
    {
      name: "stars"

    },
    {
      name: "storm-showers"

    },
    {
      name: "thunderstorm"

    },
    {
      name: "night-alt-cloudy-high"

    },
    {
      name: "night-cloudy-high"

    },
    {
      name: "night-alt-partly-cloudy"

    }, {
      name: "time-1"

    },
    {
      name: "time-2"

    },
    {
      name: "time-3"

    },
    {
      name: "time-4"

    },
    {
      name: "time-5"

    },
    {
      name: "time-6"

    },
    {
      name: "time-7"

    },
    {
      name: "time-8"

    },
    {
      name: "time-9"

    },
    {
      name: "time-10"

    },
    {
      name: "time-11"
    },
    {
      name: "time-12"
    },

    {
      name: "direction-up"

    },
    {
      name: "direction-up-right"

    },
    {
      name: "direction-right"

    },
    {
      name: "direction-down-right"

    },
    {
      name: "direction-down"

    },
    {
      name: "direction-down-left"

    },
    {
      name: "direction-left"

    },
    {
      name: "direction-up-left"

    },
    {
      name: "wind-beaufort-0"

    },
    {
      name: "wind-beaufort-1"

    },
    {
      name: "wind-beaufort-2"

    },
    {
      name: "wind-beaufort-3"

    },
    {
      name: "wind-beaufort-4"

    },
    {
      name: "wind-beaufort-5"

    },
    {
      name: "wind-beaufort-6"

    },
    {
      name: "wind-beaufort-7"

    },
    {
      name: "wind-beaufort-8"

    },
    {
      name: "wind-beaufort-9"

    },
    {
      name: "wind-beaufort-10"

    },
    {
      name: "wind-beaufort-11"

    },
    {
      name: "wind-beaufort-12"

    },
    {
      name: "moon-waxing-crescent-1"

    },
    {
      name: "moon-waxing-crescent-2"

    },
    {
      name: "moon-waxing-crescent-3"

    },
    {
      name: "moon-waxing-crescent-4"

    },
    {
      name: "moon-waxing-crescent-5"

    },
    {
      name: "moon-waxing-crescent-6"

    },
    {
      name: "moon-first-quarter"

    },
    {
      name: "moon-waxing-gibbous-1"

    },
    {
      name: "moon-waxing-gibbous-2"

    },
    {
      name: "moon-waxing-gibbous-3"

    },
    {
      name: "moon-waxing-gibbous-4"

    },
    {
      name: "moon-waxing-gibbous-5"

    },
    {
      name: "moon-waxing-gibbous-6"

    },
    {
      name: "moon-full"

    },
    {
      name: "moon-waning-gibbous-1"

    },
    {
      name: "moon-waning-gibbous-2"

    },
    {
      name: "moon-waning-gibbous-3"

    },
    {
      name: "moon-waning-gibbous-4"

    },
    {
      name: "moon-waning-gibbous-5"

    },
    {
      name: "moon-waning-gibbous-6"

    },
    {
      name: "moon-third-quarter"

    },
    {
      name: "moon-waning-crescent-1"

    },
    {
      name: "moon-waning-crescent-2"

    },
    {
      name: "moon-waning-crescent-3"

    },
    {
      name: "moon-waning-crescent-4"

    },
    {
      name: "moon-waning-crescent-5"

    },
    {
      name: "moon-waning-crescent-6"

    },
    {
      name: "moon-alt-new"

    },
    {
      name: "moon-alt-waxing-crescent-1"

    },
    {
      name: "moon-alt-waxing-crescent-2"

    },
    {
      name: "moon-alt-waxing-crescent-3"

    },
    {
      name: "moon-alt-waxing-crescent-4"

    },
    {
      name: "moon-alt-waxing-crescent-5"

    },
    {
      name: "moon-alt-waxing-crescent-6"

    },
    {
      name: "moon-alt-first-quarter"

    },
    {
      name: "moon-alt-waxing-gibbous-1"

    },
    {
      name: "moon-alt-waxing-gibbous-2"

    },
    {
      name: "moon-alt-waxing-gibbous-3"

    },
    {
      name: "moon-alt-waxing-gibbous-4"

    },
    {
      name: "moon-alt-waxing-gibbous-5"

    },
    {
      name: "moon-alt-waxing-gibbous-6"

    },
    {
      name: "moon-alt-full"

    },
    {
      name: "moon-alt-waning-gibbous-1"

    },
    {
      name: "moon-alt-waning-gibbous-2"

    },
    {
      name: "moon-alt-waning-gibbous-3"

    },
    {
      name: "moon-alt-waning-gibbous-4"

    },
    {
      name: "moon-alt-waning-gibbous-5"

    },
    {
      name: "moon-alt-waning-gibbous-6"

    },
    {
      name: "moon-alt-third-quarter"

    },
    {
      name: "moon-alt-waning-crescent-1"

    },
    {
      name: "moon-alt-waning-crescent-2"

    },
    {
      name: "moon-alt-waning-crescent-3"

    },
    {
      name: "moon-alt-waning-crescent-4"

    },
    {
      name: "moon-alt-waning-crescent-5"

    },
    {
      name: "moon-alt-waning-crescent-6"

    },
    {
      name: "night-clear"

    },
    {
      name: "night-alt-cloudy"

    },
    {
      name: "night-alt-cloudy-gusts"

    },
    {
      name: "night-alt-cloudy-windy"

    },
    {
      name: "night-alt-hail"

    },
    {
      name: "night-alt-lightning"

    },
    {
      name: "night-alt-rain"

    },
    {
      name: "night-alt-rain-mix"

    },
    {
      name: "night-alt-rain-wind"

    },
    {
      name: "night-alt-showers"

    },
    {
      name: "night-alt-sleet"

    },
    {
      name: "night-alt-sleet-storm"

    },
    {
      name: "night-alt-snow"

    },
    {
      name: "night-alt-snow-thunderstorm"

    },
    {
      name: "night-alt-snow-wind"

    },
    {
      name: "night-alt-sprinkle"

    },
    {
      name: "night-alt-storm-showers"

    },
    {
      name: "night-alt-thunderstorm"

    },
    {
      name: "night-cloudy"

    },
    {
      name: "night-cloudy-gusts"

    },
    {
      name: "night-cloudy-windy"

    },
    {
      name: "night-fog"

    },
    {
      name: "night-hail"

    },
    {
      name: "night-lightning"

    },
    {
      name: "night-partly-cloudy"

    },
    {
      name: "night-rain"

    },
    {
      name: "night-rain-mix"

    },
    {
      name: "night-rain-wind"

    },
    {
      name: "night-showers"

    },
    {
      name: "night-sleet"

    },
    {
      name: "night-sleet-storm"

    },
    {
      name: "night-snow"

    },
    {
      name: "night-snow-thunderstorm"

    },
    {
      name: "night-snow-wind"

    },
    {
      name: "night-sprinkle"

    },
    {
      name: "night-storm-showers"

    },
    {
      name: "night-thunderstorm"

    },
  ]
}
