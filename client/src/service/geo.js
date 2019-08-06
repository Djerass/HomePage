import axios from "axios";

const createGeoURI = (lat, lon) => `geo?lat=${lat}&lon=${lon}`;

export const getPosition = (lat, lon) => axios.get(createGeoURI(lat, lon));
