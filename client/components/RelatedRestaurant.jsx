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
    const displaySix = () => {
      let displayRestaurants = [];
      if (data.length > 6) {
        for (let i = 0; i < 6; i += 1) {
          displayRestaurants.push(data[i]);
        }
      } else if (data.length < 6) {
        // need to implement logic for this case
        displayRestaurants = data;
      } else {
        displayRestaurants = data;
      }
      return displayRestaurants;
    };
    return (
      <div className="related-restaurants-section">
        {displaySix().map(review => (
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
