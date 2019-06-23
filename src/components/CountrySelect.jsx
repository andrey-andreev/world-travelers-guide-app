import React, { Component } from 'react';
import { arrayOf, shape, string, func } from 'prop-types';

class CountrySelect extends Component {
  state = {
    contry: 'Select contry'
  };

  onContryChange = event => {
    const { onChange } = this.props;
    this.setState({ contry: event.target.value });
    if (onChange) {
      onChange(event.target.value);
    }
  };

  render() {
    const { contry } = this.state;
    const { countries } = this.props;
    return (
      <select value={contry} onChange={this.onContryChange}>
        <option key="placeholder" value="Select contry" disabled>
          Select contry
        </option>
        {countries.map(contryObj => (
          <option key={contryObj.code} value={contryObj.code}>
            {`${contryObj.emoji} ${contryObj.name}`}
          </option>
        ))}
      </select>
    );
  }
}

CountrySelect.defaultProps = {
  onChange: null
};

CountrySelect.propTypes = {
  countries: arrayOf(
    shape({
      code: string.isRequired,
      name: string.isRequired,
      emoji: string.isRequired
    })
  ).isRequired,
  onChange: func
};

export default CountrySelect;
