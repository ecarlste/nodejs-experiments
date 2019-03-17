import path from 'path';
import express from 'express';
import hbs from 'hbs';
import dotenv from 'dotenv';
import geocode from './utils/geocode';
import forecast from './utils/forecast';

if (process.env.NODE_ENV && process.env.NODE_ENV === 'dev') {
  console.log('RUNNING IN DEV MODE');
  dotenv.config();
}

const app = express();
const port = process.env.PORT || 3000;

const publicDir = path.join(__dirname, '../public');
const viewsDir = path.join(__dirname, '../templates/views');
const partialsDir = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsDir);
hbs.registerPartials(partialsDir);

app.use(express.static(publicDir));

app.get('', (req, res) => {
  res.render('index', { title: 'Weather App', name: 'Erik S. Carlsten' });
});
app.get('/about', (req, res) => {
  res.render('about', { title: 'About', name: 'Erik S. Carlsten' });
});
app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Erik S. Carlsten',
    helpText: 'Come and get your love...'
  });
});
app.get('/weather', (req, res) => {
  const { address } = req.query;

  if (!address) {
    return res.send({
      error: 'You must provide an address'
    });
  }

  return geocode(address, (geocodeError, { latitude, longitude, location }) => {
    if (geocodeError) {
      return res.send({
        error: geocodeError
      });
    }

    return forecast(latitude, longitude, (forecastError, forecastText) => {
      if (forecastError) {
        return res.send({ error: forecastError });
      }

      return res.send({
        forecast: forecastText,
        location,
        address: req.query.address
      });
    });
  });
});
app.get('*', (req, res) => {
  res.render('404', {
    title: '404 - Page Not Found',
    name: 'Erik S. Carlsten',
    errorMessage: "These aren't the droids your're looking for!!!"
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
