const mongoose = require('mongoose');
const data = require('../faker');
const { Restaurant } = require('./index');

const db = mongoose.connect('mongodb://localhost/fecsampledata');

const seedData = data.makeData();

const seedRestaurantData = () => {
  Restaurant.create(seedData)
    .then(() => db.disconnect());
};

seedRestaurantData();
