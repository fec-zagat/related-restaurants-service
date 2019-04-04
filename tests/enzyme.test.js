/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App';
import RestaurantList from '../client/components/RestaurantList';
import RelatedRestaurants from '../client/components/RelatedRestaurants';
import RestaurantView from '../client/components/RestaurantView';

const testData = [{
  _id: 1, pictures: ['https://s3-us-west-1.amazonaws.com/samplepicturesfec/42.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/50.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/96.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/95.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/88.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/3.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/45.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/5.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/52.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/11.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/39.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/26.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/89.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/21.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/11.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/6.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/10.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/86.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/75.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/4.jpg'], name: 'name1', city: 'Beulahtown', cuisine: 'Japanese', district: 'Sint', price: '$', zagatRating: 4.6, googleRating: 3.4, description: 'Animi et tenetur blanditiis quas inventore aliquid fugit. Ab ex ea repellendus. Eos et quis voluptatem accusamus necessitatibus ut. Esse hic repellat. Similique quo quis autem temporibus distinctio rerum eveniet harum soluta.', __v: 0,
},
{
  _id: 2, pictures: ['https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/42.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/43.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/81.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/82.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/28.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/11.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/22.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/32.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/72.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/45.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/76.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/31.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/87.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/94.jpg'], name: 'name2', city: 'Beulahtown', cuisine: 'Japanese', district: 'Sint', price: '$', zagatRating: 4.2, googleRating: 5, description: 'Et est magni. Quae laudantium sunt deserunt distinctio deleniti qui voluptatem suscipit asperiores. Qui impedit voluptatum. Ut quo dicta. Dolor qui tempora similique nobis et.', __v: 0,
},
{
  _id: 3, pictures: ['https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/42.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/43.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/81.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/82.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/28.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/11.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/22.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/32.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/72.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/45.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/76.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/31.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/87.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/94.jpg'], name: 'name3', city: 'Beulahtown', cuisine: 'Japanese', district: 'Sint', price: '$', zagatRating: 4.2, googleRating: 5, description: 'Et est magni. Quae laudantium sunt deserunt distinctio deleniti qui voluptatem suscipit asperiores. Qui impedit voluptatum. Ut quo dicta. Dolor qui tempora similique nobis et.', __v: 0,
},
{
  _id: 4, pictures: ['https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/42.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/43.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/81.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/82.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/28.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/11.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/22.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/32.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/72.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/45.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/76.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/31.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/87.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/94.jpg'], name: 'name4', city: 'Beulahtown', cuisine: 'Japanese', district: 'Sint', price: '$', zagatRating: 4.2, googleRating: 5, description: 'Et est magni. Quae laudantium sunt deserunt distinctio deleniti qui voluptatem suscipit asperiores. Qui impedit voluptatum. Ut quo dicta. Dolor qui tempora similique nobis et.', __v: 0,
},
{
  _id: 5, pictures: ['https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/42.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/43.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/81.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/82.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/28.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/11.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/22.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/32.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/72.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/45.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/76.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/31.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/87.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/94.jpg'], name: 'name5', city: 'Beulahtown', cuisine: 'Japanese', district: 'Sint', price: '$', zagatRating: 4.2, googleRating: 5, description: 'Et est magni. Quae laudantium sunt deserunt distinctio deleniti qui voluptatem suscipit asperiores. Qui impedit voluptatum. Ut quo dicta. Dolor qui tempora similique nobis et.', __v: 0,
},
{
  _id: 6, pictures: ['https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/42.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/43.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/81.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/82.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/28.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/11.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/22.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/32.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/72.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/45.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/76.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/31.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/87.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/94.jpg'], name: 'name6', city: 'Beulahtown', cuisine: 'Japanese', district: 'Sint', price: '$', zagatRating: 4.2, googleRating: 5, description: 'Et est magni. Quae laudantium sunt deserunt distinctio deleniti qui voluptatem suscipit asperiores. Qui impedit voluptatum. Ut quo dicta. Dolor qui tempora similique nobis et.', __v: 0,
},
{
  _id: 7, pictures: ['https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/42.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/43.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/81.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/82.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/28.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/11.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/22.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/32.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/72.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/45.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/76.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/31.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/87.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/94.jpg'], name: 'name7', city: 'Beulahtown', cuisine: 'Japanese', district: 'Sint', price: '$', zagatRating: 4.2, googleRating: 5, description: 'Et est magni. Quae laudantium sunt deserunt distinctio deleniti qui voluptatem suscipit asperiores. Qui impedit voluptatum. Ut quo dicta. Dolor qui tempora similique nobis et.', __v: 0,
},
{
  _id: 8, pictures: ['https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/42.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/43.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/81.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/82.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/28.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/11.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/22.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/32.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/72.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/45.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/76.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/31.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/87.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/94.jpg'], name: 'name8', city: 'Beulahtown', cuisine: 'Japanese', district: 'Sint', price: '$', zagatRating: 4.2, googleRating: 5, description: 'Et est magni. Quae laudantium sunt deserunt distinctio deleniti qui voluptatem suscipit asperiores. Qui impedit voluptatum. Ut quo dicta. Dolor qui tempora similique nobis et.', __v: 0,
},
{
  _id: 9, pictures: ['https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/42.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/43.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/81.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/82.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/28.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/11.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/22.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/32.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/72.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/45.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/76.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/31.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/87.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/94.jpg'], name: 'name9', city: 'Beulahtown', cuisine: 'Japanese', district: 'Sint', price: '$', zagatRating: 4.2, googleRating: 5, description: 'Et est magni. Quae laudantium sunt deserunt distinctio deleniti qui voluptatem suscipit asperiores. Qui impedit voluptatum. Ut quo dicta. Dolor qui tempora similique nobis et.', __v: 0,
},
{
  _id: 10, pictures: ['https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/42.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/43.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/81.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/82.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/28.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/11.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/22.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/90.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/32.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/72.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/45.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/76.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/91.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/31.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/87.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/49.jpg', 'https://s3-us-west-1.amazonaws.com/samplepicturesfec/94.jpg'], name: 'name10', city: 'Beulahtown', cuisine: 'Japanese', district: 'Sint', price: '$', zagatRating: 4.2, googleRating: 5, description: 'Et est magni. Quae laudantium sunt deserunt distinctio deleniti qui voluptatem suscipit asperiores. Qui impedit voluptatum. Ut quo dicta. Dolor qui tempora similique nobis et.', __v: 0,
}];
const testCuisine = 'Japanese';
const testDistrict = 'Sint';

describe('Testing App Component', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<App />); });
  it('renders App', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('App renders RELATED PLACES to screen', () => {
    expect(wrapper.find('.related-places-section-title').first().text()).toContain('RELATED PLACES');
  });
  it('Has RestaurantList', () => {
    expect(wrapper.find(RestaurantList).length).toBe(1);
  });
});
describe('Correct props being passed down correctly', () => {
  const wrapper = shallow(<App data={testData} cuisine={testCuisine} district={testDistrict} />);
  it('Should pass down 10 restaurants', () => {
    expect(testData.length).toBe(10);
  });
  it('Should pass down cuisine type', () => {
    expect(wrapper.instance().props.cuisine).toBe('Japanese');
  });
  it('Should pass down district name', () => {
    expect(wrapper.instance().props.district).toBe('Sint');
  });
});
describe('App has appropiate css', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<App />); });
  it('Has 1 div with the name of related-places', () => {
    expect(wrapper.find({ className: '.related-places' }));
  });
  it('Has 1 div with the name of related-places-section-title', () => {
    expect(wrapper.find({ className: '.related-places-section-title' }));
  });
  it('Has 1 div with the name of related-near-title', () => {
    expect(wrapper.find({ className: '.related-near-title' }));
  });
});
describe('Testing RestaurantList Component', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<RestaurantList data={testData} cuisine={testCuisine} district={testDistrict} />); });
  it('renders RestaurantList', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('Finds RelatedRestaurant in in return section', () => {
    expect(wrapper.find(RelatedRestaurants).length).toBe(1);
  });
});
describe('Testing RelatedRestaurants Component', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<RelatedRestaurants data={testData.slice(0, 6)} />); });
  it('renders RelatedRestaurants', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('Renders 6 restaurants', () => {
    expect(wrapper.find(RestaurantView).length).toBe(6);
  });
});
describe('Testing RestaurantView Component', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<RestaurantView info={testData[0]} />); });
  it('renders RestaurantView', () => {
    expect(wrapper.length).toEqual(1);
  });
});
