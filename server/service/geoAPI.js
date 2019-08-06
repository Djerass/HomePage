const axios = require("axios");

const geoKey = "ogTQOa6qoQ5G5DfG0Z93sQBKFfJQMeG2";
const geoURI = `http://www.mapquestapi.com/geocoding/v1/reverse?key=${geoKey}&location=`;

const getPosition = (lat, lon) => {
  return axios.get(`${geoURI}${lat},${lon}`);
};

module.exports = {
  getPosition
};
