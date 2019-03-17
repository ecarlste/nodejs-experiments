import express from 'express';

const app = express();

app.get('', (req, res) => {
  res.send('Hello, world!');
});

app.get('/help', (req, res) => {
  res.send('Help page!');
});

app.get('/about', (req, res) => {
  res.send('About page!');
});

app.get('/weather', (req, res) => {
  res.send('Your weather!');
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
