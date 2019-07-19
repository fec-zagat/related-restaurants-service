import React from 'react';
import RestaurantList from './RestaurantList';
import '../../styles/relatedrestaurantssection.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      district: '',
      cuisine: '',
      currentRestaurant: '',
    };
  }

  componentDidMount() {
    const weburl = window.location.pathname;
    const id = weburl.split('-')[2].split('/')[0];
    const endpoint = `/api/${id}`;

    fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((query) => {
        this.setState({
          district: query.district,
          cuisine: query.cuisine,
          currentRestaurant: query.name,
        });
        return (this.getRestaurantList());
      })
      .catch(error => console.log(error));
  }

  getRestaurantList() {
    const { district, cuisine } = this.state;
    const endpoint = `/api/restaurants/${district}/${cuisine}`;

    fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((query) => {
        this.setState({
          data: query,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const {
      data, cuisine, currentRestaurant,
    } = this.state;

    return (
      <div className="related-places">
        <h5 className="related-places-section-title">RELATED PLACES</h5>
        <div className="related-near-title">{`More ${cuisine} near ${currentRestaurant}`}</div>
        <RestaurantList data={data} cuisine={cuisine} currentRestaurant={currentRestaurant} />
      </div>
    );
  }
}
export default App;
