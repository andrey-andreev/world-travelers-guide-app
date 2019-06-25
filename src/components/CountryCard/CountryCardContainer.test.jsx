import React from 'react';
import { shallow } from 'enzyme';
import { CountryCardContainer } from './CountryCardContainer';
import QueryCountries from '../QueryCountries/QueryCountries';

describe('test `CountryAutosuggestContainer` component', () => {
  const props = {
    selectedCountryCode: 'BG'
  };

  it('with `selectedContinentCode !== null` should render `QueryCountries` component', () => {
    const wrapper = shallow(<CountryCardContainer {...props} />);
    expect(wrapper).toContainMatchingElement(QueryCountries);
  });

  it('with `selectedContinentCode === null` should render `null`', () => {
    const wrapper = shallow(<CountryCardContainer {...props} selectedCountryCode={null} />);
    expect(wrapper.type()).toEqual(null);
  });
});
