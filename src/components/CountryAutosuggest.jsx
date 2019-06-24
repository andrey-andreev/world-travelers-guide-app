import React, { Component } from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { InputStyled, ContainerStyled, SuggestionStyled } from './CountryAutosuggestStyled';

class CountryAutosuggest extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const { countries } = this.props;
    this.setState({
      suggestions: this.getSuggestions(value, countries)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  getSuggestions = (value, countries) => {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp(`^${escapedValue}`, 'i');

    return countries.filter(country => regex.test(country.name));
  };

  getSuggestionValue = suggestion => {
    const { onCountrySelect } = this.props;
    onCountrySelect(suggestion.code);
    return suggestion.name;
  };

  renderSuggestion = suggestion => {
    return <SuggestionStyled>{`${suggestion.emoji} ${suggestion.name}`}</SuggestionStyled>;
  };

  renderInputComponent = inputProps => <InputStyled {...inputProps} />;

  renderSuggestionsContainer = ({ containerProps, children }) => {
    return <ContainerStyled {...containerProps}>{children}</ContainerStyled>;
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Search for a country',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        renderInputComponent={this.renderInputComponent}
        renderSuggestionsContainer={this.renderSuggestionsContainer}
        inputProps={inputProps}
      />
    );
  }
}

CountryAutosuggest.propTypes = {
  onCountrySelect: func.isRequired,
  countries: arrayOf(
    shape({
      code: string.isRequired,
      name: string.isRequired,
      emoji: string.isRequired
    })
  ).isRequired
};

export default CountryAutosuggest;
