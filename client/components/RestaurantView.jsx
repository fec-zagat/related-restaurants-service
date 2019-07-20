import React from 'react';
import PropTypes from 'prop-types';
import Ratings from './Ratings';
import '../../styles/singlerestaurant.css';
import '../../styles/details.css';
import '../../styles/photo.css';

class RestaurantView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.nextPhotoLeft = this.nextPhotoLeft.bind(this);
    this.nextPhotoRight = this.nextPhotoRight.bind(this);
  }

  nextPhotoRight() {
    const { index } = this.state;
    const { info: { pictures } } = this.props;

    if (index < pictures.length - 1) {
      this.setState({
        index: index + 1,
      });
    } else {
      this.setState({
        index: 0,
      });
    }
  }

  nextPhotoLeft() {
    const { index } = this.state;
    const { info: { pictures } } = this.props;

    if (index > 0) {
      this.setState({
        index: index - 1,
      });
    } else {
      this.setState({
        index: pictures.length - 1,
      });
    }
  }

  render() {
    const { index } = this.state;
    const {
      info: {
        name, cuisine, district, zagatRating, googleRating, description, price, pictures,
      },
    } = this.props;

    return (
      <div className="single-restaurant">
        <div className="image-container" style={{ position: 'relative' }}>
          <div className="left-arrow" style={{ position: 'absolute', top: 110, left: 0 }} onClick={this.nextPhotoLeft} onKeyPress={this.handleKeyPress} role="button" tabIndex={0} />
          <div className="right-arrow" style={{ position: 'absolute', top: 110, right: 0 }} onClick={this.nextPhotoRight} onKeyPress={this.handleKeyPress} role="button" tabIndex={0} />
          <img className="image-carousel-viewer" src={pictures[index]} alt="" />
        </div>
        <div className="details-section">
          <div className="related-restaurant-type-district-container">
            <div className="restaurant-title">{name}</div>
            <div className="cuisine-district-facts-details">
              <div className="details-cuisine">{cuisine}</div>
              &middot;
              <div className="details-district">{district}</div>
              &middot;
              <div className="details-price">{price}</div>
            </div>
          </div>
          <Ratings zagatRating={zagatRating} googleRating={googleRating} />
          <div className="body-description">{description}</div>
        </div>
      </div>
    );
  }
}
RestaurantView.propTypes = {
  info: PropTypes.object.isRequired,
};
export default RestaurantView;
