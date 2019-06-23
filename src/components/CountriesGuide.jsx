import React, { Component } from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import QueryCountries from './QueryCountries';
import ContinentSelect from './ContinentSelect';
import CountryList from './CountryList';
import CountryCard from './CountryCard';

const GET_CONTINENTS = gql`
  {
    continents {
      code
      name
    }
  }
`;

const GET_CONTINENT = code => gql`
  {
    continent (code: "${code}") {
      name
      countries {
        name
        code
        emoji
      }
    }
  }
`;

const GET_COUNTRY = code => gql`
  {
    country(code: "${code}") {
      code
      name
      native
      phone
      emoji
      currency
      languages {
        code
        name
        native
      }
    }
  }
`;

class CountryGuide extends Component {
  state = {
    selectedContinentCode: null,
    selectedCountryCode: null
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

  render() {
    const { selectedContinentCode, selectedCountryCode } = this.state;
    const { setSelectedContinentCode, setSelectedCountryCode } = this;

    return (
      <GuideStyled>
        <QueryCountries query={GET_CONTINENTS}>
          {data => (
            <ContinentSelect continents={data.continents} onChange={setSelectedContinentCode} />
          )}
        </QueryCountries>

        <br />

        {selectedContinentCode && (
          <QueryCountries query={GET_CONTINENT(selectedContinentCode)}>
            {data => (
              <CountryList
                countries={data.continent.countries}
                onCountrySelect={setSelectedCountryCode}
              />
            )}
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
