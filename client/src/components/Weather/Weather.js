import React, { Component } from "react";

import { getGeoposition } from "../../service/navigator";
import { getWeather } from "../../service/weather";
import { getPosition } from "../../service/geo";

import clearDay from "../../weatherIcons/clear-day.svg";
import clearNight from "../../weatherIcons/clear-night.svg";
import cloudy from "../../weatherIcons/cloudy.svg";
import fog from "../../weatherIcons/fog.svg";
import partlyCloudyDay from "../../weatherIcons/partly-cloudy-day.svg";
import partlyCloudyNight from "../../weatherIcons/partly-cloudy-night.svg";
import rain from "../../weatherIcons/rain.svg";
import sleet from "../../weatherIcons/sleet.svg";
import snow from "../../weatherIcons/snow.svg";
import wind from "../../weatherIcons/wind.svg";

import styles from "./Wether.module.scss";

export default class Weather extends Component {
  state = {
    lat: "",
    lon: "",
    weather: "",
    geo: ""
  };

  componentDidMount = async () => {
    try {
      const { lat, lon } = await getGeoposition();
      const weatherResponse = await getWeather(lat, lon);
      const weather = weatherResponse.data;
      const geoResponse = await getPosition(lat, lon);
      const position = geoResponse.data;
      this.setState({
        lat: lat,
        lon: lon,
        weather: weather,
        geo: position
      });
    } catch (e) {
      console.log(e);
    }
  };

  render = () => {
    let icon;
    switch (this.state.weather.icon) {
      case "clear-day":
        icon = clearDay;
        break;
      case "clear-night":
        icon = clearNight;
        break;
      case "cloudy":
        icon = cloudy;
        break;
      case "fog":
        icon = fog;
        break;
      case "partly-cloudy-day":
        icon = partlyCloudyDay;
        break;
      case "partly-cloudy-night":
        icon = partlyCloudyNight;
        break;
      case "rain":
        icon = rain;
        break;
      case "sleet":
        icon = sleet;
        break;
      case "snow":
        icon = snow;
        break;
      case "wind":
        icon = wind;
        break;
      default:
        icon = "";
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          {icon ? <img src={icon} alt="CLEAR CLEAR DAT" /> : null}
        </div>
        <div className={styles.values}>
          <div>
            {this.state.weather.appTemperature}°C, {this.state.weather.summary}
          </div>
          <div>
            {this.state.geo.street}, {this.state.geo.city}
          </div>
        </div>
      </div>
    );
  };
}
