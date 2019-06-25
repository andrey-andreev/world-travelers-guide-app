import React from 'react';
import { shallow } from 'enzyme';
import { CountryGuidePresenter, GuideStyled } from './CountriesGuide';
import QueryCountries from '../QueryCountries/QueryCountries';

describe('text CountriesGuide component', () => {
  const props = {
    selectedContinentCode: 'EU',
    selectedCountryCode: 'BG',
    setContinents: jest.fn(),
    setCountries: jest.fn()
  };

  it('should render correct children components', () => {
    const wrapper = shallow(<CountryGuidePresenter {...props} />);
    expect(wrapper).toContainMatchingElement(GuideStyled);
    expect(wrapper).toContainMatchingElements(3, QueryCountries);
  });
  // TODO more tests
});
