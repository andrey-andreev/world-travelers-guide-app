import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { GET_CONTINENTS, GET_CONTINENT, GET_COUNTRY } from '../queries';
import QueryCountries from './QueryCountries';
import ContinentSelect from './ContinentSelect';
import CountrySearch from './CountrySearch';
import CountryList from './CountryList';
import CountryCard from './CountryCard';

class CountryGuide extends Component {
  state = {
    selectedContinentCode: null,
    selectedCountryCode: null,
    countrySearchPattern: null
  };

  setSelectedContinentCode = selectedContinentCode => {
    this.setState({
      selectedContinentCode,
      selectedCountryCode: null
    });
  };

  setSelectedCountryCode = selectedCountryCode => {
    this.setState({ selectedCountryCode });
  };

  setCountrySearchPattern = event => {
    this.setState({ countrySearchPattern: event.target.value });
  };

  render() {
    const { selectedContinentCode, selectedCountryCode, countrySearchPattern } = this.state;
    const { setSelectedContinentCode, setSelectedCountryCode, setCountrySearchPattern } = this;

    return (
      <GuideStyled>
        <QueryCountries query={GET_CONTINENTS}>
          {data => (
            <Fragment>
              <ContinentSelect continents={data.continents} onChange={setSelectedContinentCode} />
              <CountrySearch onKeyPress={setCountrySearchPattern} />
            </Fragment>
          )}
        </QueryCountries>

        <br />

        {selectedContinentCode && (
          <QueryCountries query={GET_CONTINENT(selectedContinentCode)}>
            {data => {
              const countries = !countrySearchPattern
                ? data.continent.countries
                : data.continent.countries.filter(
                    ({ name }) => name.indexOf(countrySearchPattern) >= 0
                  );
              return <CountryList countries={countries} onCountrySelect={setSelectedCountryCode} />;
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
  }
}

export default CountryGuide;

const GuideStyled = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 0;
`;
