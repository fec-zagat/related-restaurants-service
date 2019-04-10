const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3004;

const db = require('../database/index');

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/r/restaurant-city-:id', express.static(path.join(__dirname, '../public')));

app.post('/api/restaurants/', (req, res) => {
  const restaurantInfo = {
    id: req.body.id,
    name: req.body.name,
    city: req.body.city,
    cuisine: req.body.cuisine,
    district: req.body.district,
    price: req.body.price,
    zagatRating: req.body.zagatRating,
    googleRating: req.body.googleRating,
    description: req.body.description,
  };
  db.save(restaurantInfo, (err, success) => {
    if (err) {
      return;
    }
    res.send('query was an success', success);
  });
});

app.get('/api/restaurants/:district/:cuisine', (req, res) => {
  const options = {
    cuisine: req.params.cuisine,
    district: req.params.district,
  };
  db.retrieve(options, (err, success) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(success);
  });
});

app.get('/api/restaurants/:cuisine', (req, res) => {
  const options = {
    cuisine: req.params.cuisine,
  };
  db.retrieve(options, (err, success) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(success);
  });
});

app.get('/api/:id/', (req, res) => {
  const options = {
    id: req.params.id,
  };
  db.searchByID(options, (err, success) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(success);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
