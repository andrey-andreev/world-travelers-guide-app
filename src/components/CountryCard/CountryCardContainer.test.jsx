import React from 'react';
import { shallow } from 'enzyme';
import { CountryCardContainerUnconnected } from './CountryCardContainer';
import QueryCountries from '../QueryCountries/QueryCountries';

describe('test `CountryAutosuggestContainer` component', () => {
  const props = {
    selectedCountryCode: 'BG'
  };

  it('with `selectedContinentCode !== null` should render `QueryCountries` component', () => {
    const wrapper = shallow(<CountryCardContainerUnconnected {...props} />);
    expect(wrapper).toContainMatchingElement(QueryCountries);
  });

  it('with `selectedContinentCode === null` should render `null`', () => {
    const wrapper = shallow(
      <CountryCardContainerUnconnected {...props} selectedCountryCode={null} />
    );
    expect(wrapper.type()).toEqual(null);
  });
});
