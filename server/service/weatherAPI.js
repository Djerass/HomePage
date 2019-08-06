const axios = require("axios");

const weatherKey = "6946b6a1c1865db0081306b6aa8f2716";
const weatherURI = `https://api.darksky.net/forecast/${weatherKey}/`;

const getWeather = (lat, lon) => {
  return axios.get(`${weatherURI}${lat},${lon}`);
};

module.exports = {
  getWeather
};
