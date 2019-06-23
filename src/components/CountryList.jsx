import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import { CountryListStyled, CountryListItem } from './CountryListStyled';

const CountryList = ({ countries, onCountrySelect }) => (
  <CountryListStyled>
    {countries.map(contryObj => (
      <CountryListItem
        key={contryObj.code}
        value={contryObj.code}
        onClick={() => onCountrySelect(contryObj.code)}
      >
        {`${contryObj.emoji} ${contryObj.name}`}
      </CountryListItem>
    ))}
  </CountryListStyled>
);

CountryList.propTypes = {
  countries: arrayOf(
    shape({
      code: string.isRequired,
      name: string.isRequired,
      emoji: string.isRequired
    })
  ).isRequired,
  onCountrySelect: func.isRequired
};

export default CountryList;
