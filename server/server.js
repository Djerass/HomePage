const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;

const { getWeather } = require("./service/weatherAPI");
const { Weather } = require("./model/weather");
const { getPosition } = require("./service/geoAPI");

const app = express();

app.get("/weather", async (req, res) => {
  const { lat, lon } = req.query;
  if (lat && lon) {
    const weather = await getWeather(lat, lon);
    const {
      temperature,
      apparentTemperature,
      icon,
      summary,
      pressure
    } = weather.data.currently;
    const weatherObj = Weather.createFromF(
      temperature,
      apparentTemperature,
      summary,
      pressure,
      icon
    );
    res.status(200).send(weatherObj);
  } else {
    res.status(502).end();
  }
});

app.get("/geo", async (req, res) => {
  const { lat, lon } = req.query;
  if (lat && lon) {
    const result = await getPosition(lat, lon);
    const currLocation = result.data.results[0].locations[0];
    res.status(200).send({
      street: currLocation.street,
      city: currLocation.adminArea5
    });
  } else {
    res.status(502).end();
  }
});

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});
