import React from 'react';
import { shallow } from 'enzyme';
import Autosuggest from 'react-autosuggest';
import { CountryAutosuggestPresenter } from './CountryAutosuggest';
import { SuggestionStyled, InputStyled, ContainerStyled } from './CountryAutosuggestStyled';

describe('test CountryAutosuggest component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

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

  const wrapper = shallow(<CountryAutosuggestPresenter {...props} />);

  it('should render `Autosuggest` component', () => {
    expect(wrapper).toContainMatchingElement(Autosuggest);
  });

  it('method `onChange` should set `state.value` correctly', () => {
    expect(wrapper.state('value')).toEqual('');
    wrapper.instance().onChange({}, { newValue: 'sample value' });
    expect(wrapper.state('value')).toEqual('sample value');
  });

  it('method `onSuggestionsClearRequested` should reset `state.suggestions` correctly', () => {
    expect(wrapper.state('suggestions')).toEqual([]);
    wrapper.setState({ suggestions: ['BG', 'UK'] });
    expect(wrapper.state('suggestions')).toEqual(['BG', 'UK']);
    wrapper.instance().onSuggestionsClearRequested();
    expect(wrapper.state('suggestions')).toEqual([]);
  });

  it('method `getSuggestionValue` should call `chooseCountry`', () => {
    const suggestion = { code: 'BG', name: 'Bulgaria' };
    expect(wrapper.instance().getSuggestionValue(suggestion)).toEqual(suggestion.name);
    expect(props.chooseCountry).toBeCalledTimes(1);
  });

  it('method `getSuggestionValue` should return suggestion.name', () => {
    const suggestion = { code: 'BG', name: 'Bulgaria' };
    expect(wrapper.instance().getSuggestionValue(suggestion)).toEqual(suggestion.name);
  });

  it('method `renderSuggestion` should return `SuggestionStyled` component', () => {
    const suggestion = { ...props.countries[0] };
    const result = wrapper.instance().renderSuggestion(suggestion);
    expect(result).toEqual(
      <SuggestionStyled>{`${suggestion.emoji} ${suggestion.name}`}</SuggestionStyled>
    );
  });

  it('method `renderInputComponent` should return `InputStyled` component', () => {
    const inputProps = { id: 1, value: 'sample value' };
    const result = wrapper.instance().renderInputComponent(inputProps);
    expect(result).toEqual(<InputStyled {...inputProps} />);
  });

  it('method `renderSuggestionsContainer` should return `ContainerStyled` component', () => {
    const sampleProps = {};
    const children = () => <div>Sample chilren</div>;
    const result = wrapper.instance().renderSuggestionsContainer({ sampleProps, children });
    expect(result).toEqual(<ContainerStyled {...sampleProps}>{children}</ContainerStyled>);
  });
});
