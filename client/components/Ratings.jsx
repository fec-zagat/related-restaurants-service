import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ratings.css';
// import tagazlogo from '../../styles/png/tagazlogo.png';
// import googlelogo from '../../styles/png/googlelogo.png';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { zagatRating, googleRating } = this.props;

    return (
      <div className="ratings-line">
        {/* <img src={tagazlogo} className="tagazlogo" alt="" /> */}
        <div className="tagaz-logo" alt="" />
        <div className="zagat-rating-text">{zagatRating > 0 ? ' FOOD ' : 'ZAGAT RATED'}</div>
        <div className="zagat-rating-number">{zagatRating}</div>
        <div className="ratings-divider" />
        <div className="google-logo" />
        {/* <img src={googlelogo} className="googlelogo" alt="" /> */}
        <div className="google-rating-text">{googleRating}</div>
        <div className="stars">
          <div className="empty-stars" />
          <div className="full-stars" style={{ width: `${googleRating / 5 * 100}%` }} />
        </div>
      </div>
    );
  }
}

Ratings.propTypes = {
  zagatRating: PropTypes.number.isRequired,
  googleRating: PropTypes.number.isRequired,
};

export default Ratings;
