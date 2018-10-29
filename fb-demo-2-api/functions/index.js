const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

exports.hi = functions.https.onRequest((request, response) => {
  response.send("Hi guys from Firebase!");
});

exports.jsonData = functions.https.onRequest((request, response) => {
  cors(request, response, () => {});
  response.send({
    hi: "Hi guys from Firebase!",
    ts: new Date(),
  });
});

exports.quote = functions.https.onRequest((request, response) => {
  cors(request, response, () => {});
  const quotes = [
    "Hi guys from Firebase!",
    "Firebase rulez!",
    "Burning API!",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];  
  response.send({
    msg: randomQuote,
    ts: new Date(),
  });
});
