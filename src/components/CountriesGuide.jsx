import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { GET_CONTINENTS, GET_CONTINENT, GET_COUNTRY } from '../queries';
import QueryCountries from './QueryCountries';
import ContinentSelect from './ContinentSelect';
import CountryAutosuggest from './CountryAutosuggest';
import CountryCard from './CountryCard';
import { populateContinents } from '../state/actions/continents';
import { populateCountries } from '../state/actions/countries';

const CountryGuide = ({ dispatch, selectedContinentCode, selectedCountryCode }) => (
  <GuideStyled>
    <QueryCountries query={GET_CONTINENTS}>
      {data => {
        dispatch(populateContinents(data.continents));
        return <ContinentSelect />;
      }}
    </QueryCountries>

    <br />

    {selectedContinentCode && (
      <QueryCountries query={GET_CONTINENT(selectedContinentCode)}>
        {data => {
          dispatch(populateCountries(data.continent.countries));
          return <CountryAutosuggest countries={data.continent.countries} />;
        }}
      </QueryCountries>
    )}

    <br />

    {selectedCountryCode && (
      <QueryCountries query={GET_COUNTRY(selectedCountryCode)}>
        {data => <CountryCard country={data.country} />}
      </QueryCountries>
    )}
  </GuideStyled>
);

CountryGuide.defaultProps = {
  selectedContinentCode: null,
  selectedCountryCode: null
};

CountryGuide.propTypes = {
  selectedContinentCode: string,
  selectedCountryCode: string,
  dispatch: func.isRequired
};

const mapStateToProps = state => ({
  selectedContinentCode: state.userChoices.continent,
  selectedCountryCode: state.userChoices.country
});

export default connect(mapStateToProps)(CountryGuide);

const GuideStyled = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 0;
`;
