import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

const CountryCard = ({ country: { code, name, native, phone, emoji, currency, languages } }) => (
  <div>
    <div>{emoji}</div>
    <div>{`${name} (${code}) (${native})`}</div>
    <div>
      phone code:
      {phone}
    </div>
    <div>
      currency:
      {currency}
    </div>
    <div>
      languages:
      {languages.map(lang => (
        <div key={lang.name}>{`${lang.name} ${lang.native}`}</div>
      ))}
    </div>
  </div>
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
        name: string.isRequired,
        native: string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default CountryCard;
