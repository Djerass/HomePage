export const getGeoposition = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        resolve({
          lat: latitude,
          lon: longitude
        });
      });
    } else {
      alert("Allow geo if to want to use weather forecast");
      reject();
    }
  });
};
