import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import {
  CountryCardGroup,
  CountryName,
  CountryFlag,
  CountryCardRow,
  CountryCardLabel,
  CountryCardText
} from './CountryCardStyled';

const CountryCard = ({ country: { code, name, native, phone, emoji, currency, languages } }) => (
  <CountryCardGroup>
    <CountryFlag>{emoji}</CountryFlag>
    <CountryName>
      {`${name} (${code})`}
      <br />
      {native}
    </CountryName>
    <CountryCardRow>
      <CountryCardLabel>Calling code</CountryCardLabel>
      <CountryCardText>{phone}</CountryCardText>
    </CountryCardRow>
    <CountryCardRow>
      <CountryCardLabel>Currency</CountryCardLabel>
      <CountryCardText>{currency}</CountryCardText>
    </CountryCardRow>
    {languages.length > 0 && (
      <div>
        <CountryCardRow>
          <CountryCardLabel>languages:</CountryCardLabel>
          <CountryCardText>
            {languages.map(lang => {
              if (lang.name) {
                return <div key={lang.name}>{`${lang.name} (${lang.native})`}</div>;
              }
              return false;
            })}
          </CountryCardText>
        </CountryCardRow>
      </div>
    )}
  </CountryCardGroup>
);

CountryCard.propTypes = {
  country: shape({
    code: string.isRequired,
    name: string.isRequired,
    native: string.isRequired,
    phone: string.isRequired,
    emoji: string.isRequired,
    currency: string.isRequired,
    languages: arrayOf(
      shape({
        code: string.isRequired,
        name: string,
        native: string
      })
    ).isRequired
  }).isRequired
};

export default CountryCard;
