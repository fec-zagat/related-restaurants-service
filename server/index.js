const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3004;

const {
  seedData, filterDistrictAndCuisine, filterCuisine, findById,
} = require('./controllers/databaseControllers');

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/r/:restaurant', express.static(path.join(__dirname, '../public')));


app.post('/api/restaurants/', seedData);

app.get('/api/restaurants/:district/:cuisine', filterDistrictAndCuisine);

app.get('/api/restaurants/:cuisine', filterCuisine);

app.get('/api/:id/', findById);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
