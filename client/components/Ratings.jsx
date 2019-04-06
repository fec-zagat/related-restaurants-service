import React from 'react';
import PropTypes from 'prop-types';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { zagatRating, googleRating, price } = this.props;

    return (<div>{`${zagatRating > 0 ? `FOOD: ${zagatRating}` : 'ZAGAT RATED'} * GRPH: ${googleRating} * ${price}`}</div>);
  }
}

Ratings.propTypes = {
  zagatRating: PropTypes.number.isRequired,
  googleRating: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
};

export default Ratings;
