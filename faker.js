const faker = require('faker');

// generate 'realistic' rating
const checkRating = (stars) => {
  let rating = 0;
  const option = Math.floor(Math.random() * (3 - 1) + 1);
  if (option === 1) {
    let numStars = stars + (Math.random() * (2 - 1) + 1);
    if (numStars > 5) {
      numStars -= numStars - 5;
      rating = numStars;
    } else {
      rating = numStars;
    }
  } else if (option === 2) {
    let numStars = stars - (Math.random() * (2 - 1) + 1);
    if (numStars < 0) {
      numStars += 0 - numStars;
      rating = numStars;
    } else {
      rating = numStars;
    }
  } else if (option === 3) {
    rating = stars;
  }
  return Math.round(10 * rating) / 10;
};
// capitalize letters
const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
// fake name for restaurant
const randomName = () => {
  let name = '';
  let splitName = '';
  let submitName = '';
  const randomizer = Math.floor(Math.random() * (3 - 1) + 1);
  if (randomizer === 1) {
    name = faker.lorem.word();
    submitName = capitalize(name);
  } else if (randomizer === 2) {
    name = faker.lorem.words();
    splitName = name.split(' ');
    for (let i = 0; i < splitName.length; i += 1) {
      submitName += `${capitalize(splitName[i])} `;
    }
  }
  return submitName.trim();
};
// set amount of random districts
const districts = [faker.fake('{{lorem.word}}'), faker.fake('{{lorem.words}}'), faker.fake('{{lorem.word}}'), faker.fake('{{lorem.word}}'), faker.fake('{{lorem.word}}')];
const capitalizeRandomDistrict = (district) => {
  const words = district.split(' ');
  let name = '';
  if (words.length > 1) {
    for (let i = 0; i < words.length; i += 1) {
      name += `${capitalize(words[i])} `;
    }
  } else {
    name = capitalize(district);
  }
  return name.trim();
};
const randomDistrict = capitalizeRandomDistrict(faker.random.arrayElement(districts));
// set amount of random cities
const randomCities = [faker.fake('{{address.city}}'), faker.fake('{{address.city}}'), faker.fake('{{address.city}}'), faker.fake('{{address.city}}'), faker.fake('{{address.city}}')];

// generate fake data  for each field
// const restaurantName = randomName();
// const restaurantCity = faker.random.arrayElement(randomCities);
// const restaurantCuisine = faker.random.arrayElement(['Argentina', 'Cajun', 'Estonian', 'Chinese', 'Filipino', 'Italian', 'Korean', 'Mexican', 'Polish', 'Romanian', 'Russian', 'Thai', 'Pakistani', 'Japanese', 'Nepalese', 'Peruvian', 'Portuguese', 'Brazilian', 'Malaysian', 'Indian']);
// const restaurantDistrict = randomDistrict;
// const restaurantPriceRange = faker.random.arrayElement(['$', '$$', '$$$']);
// const ratingsZagat = Math.round(10 * (Math.random() * (5 - 4) + 4)) / 10;
// const ratingsGoogle = checkRating(ratingsZagat);
// const description = faker.fake('{{lorem.paragraph}}');

const makeData = () => {
  const data = [];
  for (let i = 0; i < 100; i += 1) {
    const restaurantInfo = {
      name: randomName(),
      city: faker.random.arrayElement(randomCities),
      cuisine: faker.random.arrayElement(['Argentina', 'Cajun', 'Estonian', 'Chinese', 'Filipino', 'Italian', 'Korean', 'Mexican', 'Polish', 'Romanian', 'Russian', 'Thai', 'Pakistani', 'Japanese', 'Nepalese', 'Peruvian', 'Portuguese', 'Brazilian', 'Malaysian', 'Indian']),
      district: randomDistrict,
      price: faker.random.arrayElement(['$', '$$', '$$$']),
      zagatRating: Math.round(10 * (Math.random() * (5 - 4) + 4)) / 10,
      googleRating: checkRating(Math.round(10 * (Math.random() * (5 - 4) + 4)) / 10),
      description: faker.fake('{{lorem.paragraph}}'),
    };
    data.push(restaurantInfo);
  }
  return data;
};

module.exports = { makeData };
// ID (unique identifier): _id
// Name of restaurant:  faker data for restaurant name
// City: faker data for city
// Type of food (i.e. Seafood): faker data for category of food
// District (i.e. Outer Richmond): faker data for name of district
// Price Range (i.e. $ - $$$): faker/random number for price range
// Zagat Rating: faker data for rating
// Google Rating: faker data for ratings
// Description (If any): ipsum random data for review.
