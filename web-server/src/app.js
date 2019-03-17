import path from 'path';
import express from 'express';

const app = express();
const publicDir = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDir));

app.get('', (req, res) => {
  res.render('index', { title: 'Weather App', name: 'Erik S. Carlsten' });
});
app.get('/weather', (req, res) => {
  res.send('Your weather!');
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
