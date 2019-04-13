const mongoose = require('mongoose');

mongoose.connect('mongodb://172.17.0.3:27017/fecsampledata');

const similarRestaurant = mongoose.Schema({
  id: Number,
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
const searchByID = (options, callback) => {
  Restaurant.findOne(options, (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};
const searchID = (id, callback) => {
  Restaurant.findById(id, (err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

module.exports = {
  Restaurant, save, retrieve, searchID, searchByID,
};
