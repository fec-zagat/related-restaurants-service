import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App';

describe('Hello Wolrd Test', () => {
  const wrapper = shallow(<App />);
  test('says hellow world', () => {
    expect(wrapper.text()).toEqual('Hello World');
  });
});