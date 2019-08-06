const fromFtoC = f => (f - 32) / 1.8;

class Weather {
  constructor(temperature, appTemperature, summary, pressuare, icon) {
    this.temperature = temperature;
    this.appTemperature = appTemperature;
    this.summary = summary;
    this.pressuare = pressuare;
    this.icon = icon;
  }
  static createFromF(temperature, appTemperature, summary, pressuare, icon) {
    const convertedTemp = fromFtoC(temperature);
    const convertedAppTemp = fromFtoC(appTemperature);
    return new Weather(
      convertedTemp.toFixed(1),
      convertedAppTemp.toFixed(1),
      summary,
      pressuare,
      icon
    );
  }
}

module.exports = {
  Weather
};
