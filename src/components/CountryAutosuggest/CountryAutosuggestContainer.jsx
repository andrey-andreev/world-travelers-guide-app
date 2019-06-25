import React from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import { GET_CONTINENT } from '../../queries';
import QueryCountries from '../QueryCountries/QueryCountries';
import CountryAutosuggest from './CountryAutosuggest';
import { populateCountries } from '../../state/actions/countries';

export const CountryAutosuggestContainer = ({ selectedContinentCode, setCountries }) => {
  if (!selectedContinentCode) {
    return null;
  }
  return (
    <QueryCountries query={GET_CONTINENT(selectedContinentCode)}>
      {data => {
        setCountries(data.continent.countries);
        return <CountryAutosuggest countries={data.continent.countries} />;
      }}
    </QueryCountries>
  );
};

CountryAutosuggestContainer.defaultProps = {
  selectedContinentCode: null
};

CountryAutosuggestContainer.propTypes = {
  selectedContinentCode: string,
  setCountries: func.isRequired
};

const mapStateToProps = state => ({
  selectedContinentCode: state.userChoices.continent
});

export default connect(
  mapStateToProps,
  { setCountries: populateCountries }
)(CountryAutosuggestContainer);
