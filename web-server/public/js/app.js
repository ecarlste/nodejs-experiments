/* eslint-disable no-undef */
console.log('Client side javascript wished it had chalk.js!!!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const locationName = document.querySelector('#location-name');
const forecastInfo = document.querySelector('#forecast-info');

weatherForm.addEventListener('submit', e => {
  e.preventDefault();

  forecastInfo.textContent = 'Loading...';
  locationName.textContent = '';

  fetch(`http://localhost:3000/weather?address=${search.value}`).then(response => {
    response.json().then(({ error, forecast, location }) => {
      if (error) {
        forecastInfo.textContent = error;
      } else {
        locationName.textContent = location;
        forecastInfo.textContent = forecast;
      }
    });
  });
});
