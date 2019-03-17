import request from 'request';

export const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/0f35d5f01c272ef9c6e469e23729c2bc/${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to dark sky weather service.');
    } else if (body.error) {
      callback('Unable to find location.');
    } else {
      const weather = body.currently;
      callback(
        undefined,
        `${weather.summary}. It's currently ${
          weather.temperature
        } degrees out. There is a ${weather.precipProbability * 100}% chance of rain.`
      );
    }
  });
};
