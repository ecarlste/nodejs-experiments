import { geocode } from './utils/geocode';

geocode('Los Angelos', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
