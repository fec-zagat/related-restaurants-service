import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import RelatedRestaurants from './RelatedRestaurants';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      additionalRestaurants: [],
    };
  }

  getRestaurantList() {
    const { cuisine } = this.props;
    const endpoint = `/api/restaurants/${cuisine}`;

    $.ajax({
      url: endpoint,
      method: 'GET',
      success: (query) => {
        this.setState({
          additionalRestaurants: query,
        });
      },
    });
  }


  render() {
    const { data, currentRestaurant } = this.props;
    const { additionalRestaurants } = this.state;
    let list = [];
    const filter = data.filter(restaurant => restaurant.name !== currentRestaurant);

    if (filter.length === 6) {
      list = filter;
    } else if (filter.length > 6) {
      list = filter.slice(0, 6);
    } else if (filter.length < 6) {
      this.getRestaurantList();
      const additionalRestaurantsList = additionalRestaurants.slice();
      additionalRestaurantsList.slice(0, 6 - filter.length);
      list = filter.concat(additionalRestaurantsList);
    }

    return (<RelatedRestaurants data={list} />);
  }
}
RestaurantList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  cuisine: PropTypes.string.isRequired,
  currentRestaurant: PropTypes.string.isRequired,
};
export default RestaurantList;
