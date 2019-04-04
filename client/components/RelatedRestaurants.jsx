/* eslint no-underscore-dangle: ["error", {"allow": ["_id"] }] */
/*  eslint no-undef: "error"  */
import React from 'react';
import PropTypes from 'prop-types';
import RestaurantView from './RestaurantView';
import '../../styles/singlerestaurant.css';

class RelatedRestaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { data } = this.props;
    return (
      <div className="related-restaurants-section layout-row">
        {data.map(review => (
          <RestaurantView key={review._id} info={review} />
        ))}
      </div>
    );
  }
}
RelatedRestaurants.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RelatedRestaurants;
