/* eslint no-underscore-dangle: ["error", {"allow": ["_id"] }] */

import React from 'react';

class RelatedRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { data } = this.props;

    return (
      <div className="related-restaurants-section">
        {data.map(review => (
          <div key={review._id} className="single-restaurant">
            <h5>{review.name}</h5>
            <div>{`${review.cuisine} ${review.district}`}</div>
            <div>{`${review.zagatRating} ${review.googleRating}`}</div>
            <div>{review.description}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default RelatedRestaurant;
