import request from 'request';

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/${
    process.env.DARKSKY_API_KEY
  }/${latitude},${longitude}`;

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

export default forecast;
