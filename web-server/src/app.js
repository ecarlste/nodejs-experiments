import path from 'path';
import express from 'express';
import hbs from 'hbs';

const app = express();
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
  res.send('Your weather!');
});
app.get('*', (req, res) => {
  res.render('404', {
    title: '404 - Page Not Found',
    name: 'Erik S. Carlsten',
    errorMessage: "These aren't the droids your're looking for!!!"
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
