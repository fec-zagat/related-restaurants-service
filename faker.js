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
const districts = [faker.fake('{{lorem.word}}'), faker.fake('{{lorem.words}}'), faker.fake('{{lorem.word}}'), faker.fake('{{lorem.words}}'), faker.fake('{{lorem.word}}')];
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

const randomCities = [faker.fake('{{address.city}}'), faker.fake('{{address.city}}'), faker.fake('{{address.city}}'), faker.fake('{{address.city}}'), faker.fake('{{address.city}}')];

const makeData = () => {
  const data = [];
  for (let i = 0; i < 1000; i += 1) {
    const restaurantInfo = {
      name: randomName(),
      city: faker.random.arrayElement(randomCities),
      cuisine: faker.random.arrayElement(['Argentina', 'Cajun', 'Estonian', 'Chinese', 'Filipino', 'Italian', 'Korean', 'Mexican', 'Polish', 'Romanian', 'Russian', 'Thai', 'Pakistani', 'Japanese', 'Nepalese', 'Peruvian', 'Portuguese', 'Brazilian', 'Malaysian', 'Indian']),
      district: capitalizeRandomDistrict(faker.random.arrayElement(districts)),
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
