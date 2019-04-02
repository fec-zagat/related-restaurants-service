/* eslint no-underscore-dangle: ["error", {"allow": ["_id"] }] */
/*  eslint no-undef: "error"  */
import React from 'react';
import '../../styles/individual.css';

class RelatedRestaurant extends React.Component {
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
          <div key={review._id} className="single-restaurant">
            <h5 className="restaurant-tile">{review.name}</h5>
            <div className="cuisine-district-facts-details">{`${review.cuisine} ${review.district}`}</div>
            <div>{`${review.zagatRating} ${review.googleRating}`}</div>
            <div>{review.description}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default RelatedRestaurant;
