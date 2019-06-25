import React from 'react';
import { shallow } from 'enzyme';
import Autosuggest from 'react-autosuggest';
import { CountryAutosuggestPresenter } from './CountryAutosuggest';

describe('test CountryAutosuggest component', () => {
  it('should render `Autosuggest` component', () => {
    const wrapper = shallow(<CountryAutosuggestPresenter />);
    expect(wrapper).toContainMatchingElement(Autosuggest);
  });
});
