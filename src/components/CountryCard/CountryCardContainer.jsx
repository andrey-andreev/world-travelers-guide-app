import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import CountryCard from './CountryCard';
import { GET_COUNTRY } from '../../queries';
import QueryCountries from '../QueryCountries/QueryCountries';

export const CountryCardContainer = ({ selectedCountryCode }) => {
  if (!selectedCountryCode) {
    return null;
  }
  return (
    <QueryCountries query={GET_COUNTRY(selectedCountryCode)}>
      {data => <CountryCard country={data.country} />}
    </QueryCountries>
  );
};

CountryCardContainer.defaultProps = {
  selectedCountryCode: null
};

CountryCardContainer.propTypes = {
  selectedCountryCode: string
};

const mapStateToProps = state => ({
  selectedCountryCode: state.userChoices.country
});

export default connect(mapStateToProps)(CountryCardContainer);
