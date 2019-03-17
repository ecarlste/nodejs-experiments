import { geocode } from './utils/geocode';
import { forecast } from './utils/forecast';

const location = process.argv.slice(2)[0];

if (!location) {
  console.log('command line argument missing: City');
  process.exit(0);
}

geocode(location, (error, geocodeData) => {
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
