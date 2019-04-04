import React from 'react';
import PropTypes from 'prop-types';
import RelatedRestaurants from './RelatedRestaurants';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { data, cuisine, district } = this.props;
    let list = [];
    const type = data.filter(restaurant => restaurant.cuisine === cuisine);
    const location = type.filter(restaurant => restaurant.district === district);
    const listFilter = location;
    if (listFilter.length === 6) {
      list = listFilter;
    } else if (listFilter.length > 6) {
      list = listFilter.slice(0, 6);
    } else if (listFilter.length < 6) {
      const additionalRestaurants = data.filter(restaurant => restaurant.district === district);
      for (let i = 0; i < additionalRestaurants.length; i += 1) {
        const restaurant = additionalRestaurants[i];
        if (!listFilter.includes(restaurant)) {
          listFilter.push(restaurant);
        }
        if (listFilter.length > 5) {
          break;
        }
      }
      if (listFilter.length < 6) {
        for (let i = 0; i < data.length; i += 1) {
          const restaurant = data[i];
          if (!listFilter.includes(restaurant)) {
            listFilter.push(restaurant);
          }
          if (listFilter.length > 5) {
            break;
          }
        }
      }
      list = listFilter;
    }
    return (<RelatedRestaurants data={list} />);
  }
}
RestaurantList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  cuisine: PropTypes.string.isRequired,
  district: PropTypes.string.isRequired,
};
export default RestaurantList;
