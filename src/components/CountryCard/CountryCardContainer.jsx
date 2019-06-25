import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import CountryCard from './CountryCard';
import { GET_COUNTRY } from '../../queries';
import QueryCountries from '../QueryCountries/QueryCountries';

export const CountryCardContainerUnconnected = ({ selectedCountryCode }) => {
  if (!selectedCountryCode) {
    return null;
  }
  return (
    <QueryCountries query={GET_COUNTRY(selectedCountryCode)}>
      {data => <CountryCard country={data.country} />}
    </QueryCountries>
  );
};

CountryCardContainerUnconnected.defaultProps = {
  selectedCountryCode: null
};

CountryCardContainerUnconnected.propTypes = {
  selectedCountryCode: string
};

const mapStateToProps = state => ({
  selectedCountryCode: state.userChoices.country
});

export default connect(mapStateToProps)(CountryCardContainerUnconnected);
