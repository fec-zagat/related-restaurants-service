import React from 'react';
import $ from 'jquery';
import RestaurantList from './RestaurantList';
import '../../styles/section.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentDistrict: '',
      currentCuisine: '',
      currentRestaurant: '',
    };
  }

  componentDidMount() {
    const endpoint = '/api/restaurants/';
    $.ajax({
      url: endpoint,
      method: 'GET',
      success: (query) => {
        this.setState({
          data: query,
          currentDistrict: query[50].district,
          currentCuisine: query[50].cuisine,
          currentRestaurant: query[50].name,
        });
      },
    });
  }

  render() {
    const {
      data, currentCuisine, currentDistrict, currentRestaurant,
    } = this.state;

    return (
      <div className="related-places">
        <h5 className="related-places-section-title">RELATED PLACES</h5>
        <div className="related-near-title">{`More ${currentCuisine} near ${currentRestaurant}`}</div>
        <RestaurantList data={data} cuisine={currentCuisine} district={currentDistrict} />
      </div>
    );
  }
}

export default App;
