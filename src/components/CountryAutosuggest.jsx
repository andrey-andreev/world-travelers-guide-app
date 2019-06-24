import React, { Component } from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import Autosuggest from 'react-autosuggest';
// import styled from 'styled-components';

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
    return <span>{`${suggestion.emoji} ${suggestion.name}`}</span>;
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
