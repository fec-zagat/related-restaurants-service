/* eslint no-underscore-dangle: ["error", {"allow": ["_id"] }] */
/*  eslint no-undef: "error"  */
import React from 'react';
import PropTypes from 'prop-types';
import RestaurantView from './RestaurantView';
import '../../styles/singlerestaurant.css';

const RelatedRestaurants = ({ data }) => (
  <div className="related-restaurants-section">
    {data.map(review => (
      <RestaurantView key={review._id} info={review} />
    ))}
  </div>
);

RelatedRestaurants.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RelatedRestaurants;
