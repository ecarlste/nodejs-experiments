import { geocode } from './utils/geocode';
import { forecast } from './utils/forecast';

geocode('Los Angelos', (error, geocodeData) => {
  if (error) {
    return console.error(error);
  }

  forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
    if (error) {
      console.error(error);
    }

    console.log(geocodeData.location);
    console.log(forecastData);
  });
});
