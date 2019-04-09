import React from 'react';
import $ from 'jquery';
import RestaurantList from './RestaurantList';
import '../../styles/relatedrestaurantssection.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      district: '',
      cuisine: '',
      currentRestaurant: '',
      restaurantID: '5caa9e7df0567c367485adc2',
    };
  }

  componentDidMount() {
    const { restaurantID } = this.state;
    const id = restaurantID;
    const endpoint = `/api/${id}`;
    fetch(endpoint)
      .then(response => response.json())
      .then((query) => {
        this.setState({
          district: query.district,
          cuisine: query.cuisine,
          currentRestaurant: query.name,
        });
        return (this.getRestaurantList());
      });
  }

  getRestaurantList() {
    const { district, cuisine } = this.state;
    const endpoint = `/api/restaurants/${district}/${cuisine}`;
    $.ajax({
      url: endpoint,
      method: 'GET',
      success: (query) => {
        this.setState({
          data: query,
        });
      },
    });
  }

  render() {
    const {
      data, cuisine, currentRestaurant,
    } = this.state;

    return (
      <div className="related-places">
        <h5 className="related-places-section-title">RELATED PLACES</h5>
        <div className="related-near-title">{`More ${cuisine} near ${currentRestaurant}`}</div>
        <RestaurantList data={data} cuisine={cuisine} currentRestaurant={currentRestaurant} />
      </div>
    );
  }
}

export default App;
