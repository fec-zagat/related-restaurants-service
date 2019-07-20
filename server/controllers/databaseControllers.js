const db = require('../../database/index');

const seedData = (req, res) => {
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
};

const filterDistrictAndCuisine = (req, res) => {
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
};

const filterCuisine = (req, res) => {
  const options = {
    cuisine: req.params.cuisine,
  };
  db.retrieve(options, (err, success) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(success);
  });
};

const findById = (req, res) => {
  const options = {
    id: req.params.id,
  };
  db.searchByID(options, (err, success) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(success);
  });
};

module.exports = {
  seedData, filterDistrictAndCuisine, filterCuisine, findById,
};
