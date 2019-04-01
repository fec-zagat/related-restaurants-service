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
          cuisine: query[0].cuisine,
          district: query[0].district,
          currentRestaurant: query[0].name,
        });
      },
    });
  }

  render() {
    const { data } = this.state;
    const { cuisine } = this.state;
    const { district } = this.state;
    const { currentRestaurant } = this.state;
    const type = data.filter(restaurant => restaurant.cuisine === cuisine);
    const location = type.filter(restaurant => restaurant.district === district);
    return (
      <div>
        <h5>RELATED PLACES</h5>
        <div>{`More ${cuisine} near ${currentRestaurant}`}</div>
        <RelatedRestaurant data={location} />
      </div>
    );
  }
}

export default App;
