import React, { Component } from 'react';
import { arrayOf, shape, string, func } from 'prop-types';

class ContinentSelect extends Component {
  state = {
    continent: 'Select continent'
  };

  onContinentChange = event => {
    const { onChange } = this.props;
    this.setState({ continent: event.target.value });
    if (onChange) {
      onChange(event.target.value);
    }
  };

  render() {
    const { continent } = this.state;
    const { continents } = this.props;
    return (
      <select value={continent} onChange={this.onContinentChange}>
        <option key="placeholder" value="Select continent" disabled>
          Select continent
        </option>
        {continents.map(continentObj => (
          <option key={continentObj.code} value={continentObj.code}>
            {continentObj.name}
          </option>
        ))}
      </select>
    );
  }
}

ContinentSelect.defaultProps = {
  onChange: null
};

ContinentSelect.propTypes = {
  continents: arrayOf(
    shape({
      code: string.isRequired,
      name: string.isRequired
    })
  ).isRequired,
  onChange: func
};

export default ContinentSelect;
