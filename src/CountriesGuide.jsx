import React, { Fragment, Component } from 'react';
import gql from 'graphql-tag';
import QueryCountries from './QueryCountries';
import ContinentSelect from './ContinentSelect';
import CountrySelect from './CountrySelect';
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
    this.setState({ selectedContinentCode });
  };

  setSelectedCountryCode = selectedCountryCode => {
    this.setState({ selectedCountryCode });
  };

  render() {
    const { selectedContinentCode, selectedCountryCode } = this.state;
    const { setSelectedContinentCode, setSelectedCountryCode } = this;

    return (
      <Fragment>
        <QueryCountries query={GET_CONTINENTS}>
          {data => (
            <ContinentSelect continents={data.continents} onChange={setSelectedContinentCode} />
          )}
        </QueryCountries>

        <br />

        {selectedContinentCode && (
          <QueryCountries query={GET_CONTINENT(selectedContinentCode)}>
            {data => (
              <CountrySelect
                countries={data.continent.countries}
                onChange={setSelectedCountryCode}
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
      </Fragment>
    );
  }
}

export default CountryGuide;
