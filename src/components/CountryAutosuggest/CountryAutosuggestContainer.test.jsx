import React from 'react';
import { shallow } from 'enzyme';
import { CountryAutosuggestContainer } from './CountryAutosuggestContainer';
import QueryCountries from '../QueryCountries/QueryCountries';

describe('test `CountryAutosuggestContainer` component', () => {
  const props = {
    selectedContinentCode: 'EU',
    setCountries: jest.fn()
  };

  it('with `selectedContinentCode !== null` should render `QueryCountries` component', () => {
    const wrapper = shallow(<CountryAutosuggestContainer {...props} />);
    expect(wrapper).toContainMatchingElement(QueryCountries);
  });

  it('with `selectedContinentCode === null` should render `null`', () => {
    const wrapper = shallow(
      <CountryAutosuggestContainer {...props} selectedContinentCode={null} />
    );
    expect(wrapper.type()).toEqual(null);
  });
});
