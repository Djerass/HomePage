import axios from "axios";

const createWeatherURI = (lat, lon) => `weather?lat=${lat}&lon=${lon}`;

export const getWeather = (lat, lon) => axios.get(createWeatherURI(lat, lon));
