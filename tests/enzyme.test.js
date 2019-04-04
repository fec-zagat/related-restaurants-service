/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App';

describe('Hello World Test', () => {
  const wrapper = shallow(<App />);
  test('says hello world', () => {
    expect(wrapper.text()).toEqual('Hello World');
  });
});
