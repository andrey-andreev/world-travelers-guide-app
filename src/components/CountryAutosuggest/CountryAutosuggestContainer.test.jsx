import React from 'react';
import { shallow } from 'enzyme';
import { CountryAutosuggestContainerUnconnected } from './CountryAutosuggestContainer';
import QueryCountries from '../QueryCountries/QueryCountries';

describe('test `CountryAutosuggestContainer` component', () => {
  const props = {
    selectedContinentCode: 'EU',
    setCountries: jest.fn()
  };

  it('with `selectedContinentCode !== null` should render `QueryCountries` component', () => {
    const wrapper = shallow(<CountryAutosuggestContainerUnconnected {...props} />);
    expect(wrapper).toContainMatchingElement(QueryCountries);
  });

  it('with `selectedContinentCode === null` should render `null`', () => {
    const wrapper = shallow(
      <CountryAutosuggestContainerUnconnected {...props} selectedContinentCode={null} />
    );
    expect(wrapper.type()).toEqual(null);
  });
});
