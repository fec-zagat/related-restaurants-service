const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fecsampledata');

const similarRestaurant = mongoose.Schema({
  name: String,
  city: String,
  cuisine: String,
  district: String,
  price: String,
  zagatRating: Number,
  googleRating: Number,
  description: String,
  pictures: [{ type: String }],
});

const Restaurant = mongoose.model('restaurant', similarRestaurant);

const save = (currentRestaurant, callback) => {
  Restaurant.create(currentRestaurant, (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

const retrieve = (options, callback) => {
  Restaurant.find(options, (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

module.exports = { Restaurant, save, retrieve };
