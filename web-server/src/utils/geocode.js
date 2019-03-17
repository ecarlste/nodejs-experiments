import request from 'request';

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${
    process.env.MAPBOX_API_KEY
  }&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to mapbox geocoding service.');
    } else if (body.features.length === 0) {
      callback('Unable to determine location. Try another search.');
    } else {
      const { center, place_name: placeName } = body.features[0];
      callback(undefined, { latitude: center[1], longitude: center[0], location: placeName });
    }
  });
};

export default geocode;
