import React from 'react';
import { shallow } from 'enzyme';
import Autosuggest from 'react-autosuggest';
import { CountryAutosuggestPresenter } from './CountryAutosuggest';

describe('test CountryAutosuggest component', () => {
  const props = {
    chooseCountry: jest.fn(),
    countries: [
      {
        code: 'BG',
        name: 'Bulgaria',
        emoji: '🇧🇬'
      }
    ]
  };
  it('should render `Autosuggest` component', () => {
    const wrapper = shallow(<CountryAutosuggestPresenter {...props} />);
    expect(wrapper).toContainMatchingElement(Autosuggest);
  });
  // TODO: test `onChange` method
  // TODO: test `onSuggestionsFetchRequested` method
  // TODO: test `onSuggestionsClearRequested` method
  // TODO: test `escapeRegexCharacters` method
  // TODO: test `getSuggestions` method
  // TODO: test `getSuggestionValue` method
  // TODO: test `renderSuggestion` method
  // TODO: test `renderInputComponent` method
  // TODO: test `renderSuggestionsContainer` method
  // TODO: test `` method
});
