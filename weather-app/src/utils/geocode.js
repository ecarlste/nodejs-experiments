import request from 'request';

export const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZWNhcmxzdGUiLCJhIjoiY2p0Y2NnbnhtMHY1bTN5dDVtZTk4eTdzcCJ9.qT-3rvVphLAEVKXGZSP53g&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to mapbox geocoding service.');
    } else if (body.features.length === 0) {
      callback('Unable to determine location. Try another search.');
    } else {
      const { center, place_name } = body.features[0];
      callback(undefined, { latitude: center[1], longitude: center[0], location: place_name });
    }
  });
};
