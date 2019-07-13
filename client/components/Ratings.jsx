import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ratings.css';

const Ratings = ({ zagatRating, googleRating }) => (
  <div className="ratings-line">
    <div className="tagaz-logo" alt="" />
    <div className="zagat-rating-text">{zagatRating > 0 ? ' FOOD ' : 'ZAGAT RATED'}</div>
    <div className="zagat-rating-number">{zagatRating}</div>
    <div className="ratings-divider" />
    <div className="google-logo" />
    <div className="google-rating-text">{googleRating}</div>
    <div className="stars">
      <div className="empty-stars" />
      <div className="full-stars" style={{ width: `${googleRating / 5 * 100}%` }} />
    </div>
  </div>
);

Ratings.propTypes = {
  zagatRating: PropTypes.number.isRequired,
  googleRating: PropTypes.number.isRequired,
};

export default Ratings;
