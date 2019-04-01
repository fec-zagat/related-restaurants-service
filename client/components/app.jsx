import React from 'react';
import $ from 'jquery';
import RelatedRestaurant from './RelatedRestaurant';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      cuisine: '',
      district: '',
      currentRestaurant: '',
      districts: {},
    };
  }

  componentDidMount() {
    const endpoint = '/api/restaurants/';
    $.ajax({
      url: endpoint,
      method: 'GET',
      success: (query) => {
        const newDistricts = {};
        for (let i = 0; i < query.length; i += 1) {
          if (newDistricts[query[i].district] === undefined) {
            newDistricts[query[i].district] = query[i].district;
          }
        }
        this.setState({
          data: query,
          cuisine: query[0].cuisine,
          district: query[0].district,
          currentRestaurant: query[0].name,
          districts: newDistricts,
        });
      },
    });
  }

  render() {
    let list = [];
    const {
      data, cuisine, district, currentRestaurant, districts,
    } = this.state;

    const type = data.filter(restaurant => restaurant.cuisine === cuisine);
    const location = type.filter(restaurant => restaurant.district === district);
    if (location.length === 6) {
      list = location;
    } else if (location.length > 6) {
      list = location.slice(0, 6);
    } else if (location.length < 6) {
      const additionalRestaurants = data.filter(restaurant => restaurant.district === district);
      for (let i = 0; i < additionalRestaurants.length; i += 1) {
        const restaurant = additionalRestaurants[i];
        if (!location.includes(restaurant)) {
          location.push(restaurant);
        }
        if (location.length > 5) {
          break;
        }
      }
      if (location.length < 6) {
        for (let i = 0; i < data.length; i += 1) {
          const restaurant = data[i];
          if (!location.includes(restaurant)) {
            location.push(restaurant);
          }
          if (location.length > 5) {
            break;
          }
        }
      }
      list = location;
    }

    return (
      <div className="related-places">
        <h5 className="related-places-section-title">RELATED PLACES</h5>
        <div className="related-near-title">{`More ${cuisine} near ${currentRestaurant}`}</div>
        <RelatedRestaurant data={list} districts={districts} />
      </div>
    );
  }
}

export default App;
