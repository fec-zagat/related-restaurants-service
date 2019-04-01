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
    const { data } = this.state;
    const { cuisine } = this.state;
    const { district } = this.state;
    const { currentRestaurant } = this.state;
    const { districts } = this.state;
    const type = data.filter(restaurant => restaurant.cuisine === cuisine);
    const location = type.filter(restaurant => restaurant.district === district);
    return (
      <div className="related-places">
        <h5 className="related-places-section-title">RELATED PLACES</h5>
        <div className="related-near-title">{`More ${cuisine} near ${currentRestaurant}`}</div>
        <RelatedRestaurant data={location} districts={districts} />
      </div>
    );
  }
}

export default App;
