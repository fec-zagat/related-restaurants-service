import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/individual.css';

class RestaurantView extends React.Component {
  constructor(props) {
    super(props);
    const {
      pictures,
    } = props.info;
    this.state = {
      pictures,
      index: 0,
    };
  }

  nextPhotoRight() {
    const { pictures, index } = this.state;
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
    const { pictures, index } = this.state;
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
    const { pictures, index } = this.state;
    const {
      info: {
        name, cuisine, district, zagatRating, googleRating, description,
      },
    } = this.props;
    return (
      <div className="single-restaurant">
        <button onClick={() => this.nextPhotoLeft()} type="submit">Left</button>
        <img className="image-carousel-viewer" src={pictures[index]} alt="" />
        <button onClick={() => this.nextPhotoRight()} type="submit">Right</button>
        <h5 className="restaurant-tile">{name}</h5>
        <div className="cuisine-district-facts-details">{`${cuisine} ${district}`}</div>
        <div>{`${zagatRating} ${googleRating}`}</div>
        <div>{description}</div>
      </div>
    );
  }
}
RestaurantView.propTypes = {
  info: PropTypes.object.isRequired,
};
export default RestaurantView;
