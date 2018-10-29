const functions = require('firebase-functions');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');

exports.myApp = functions.https.onRequest(app);

app.get('/', (req, res) => {
  res.send('Home!');
});

app.get('/view', (req, res) => {
  res.render('template', {title: 'Great template!'});
});

app.get('/api', (req, res) => {
  res.send({ 
    msg: 'API info',
    ts: new Date(),
  });
});

app.get('*', (req, res) => {
  res.send('NotFound');
});
