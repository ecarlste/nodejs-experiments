import request from 'request';

export const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZWNhcmxzdGUiLCJhIjoiY2p0Y2NnbnhtMHY1bTN5dDVtZTk4eTdzcCJ9.qT-3rvVphLAEVKXGZSP53g&limit=1`;

  console.log(url);

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to mapbox geocoding service.');
    } else if (response.body.features.length === 0) {
      callback('Unable to determine location. Try another search.');
    } else {
      const { center, place_name } = response.body.features[0];
      callback(undefined, { latitude: center[0], longitude: center[1], location: place_name });
    }
  });
};
