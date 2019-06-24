import React, { Component } from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import styled from 'styled-components';

class ContinentSelect extends Component {
  state = {
    continent: ''
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
      <SelectStyled value={continent} onChange={this.onContinentChange}>
        <option key="placeholder" value="">
          Select continent
        </option>
        {continents.map(continentObj => (
          <option key={continentObj.code} value={continentObj.code}>
            {continentObj.name}
          </option>
        ))}
      </SelectStyled>
    );
  }
}

ContinentSelect.propTypes = {
  continents: arrayOf(
    shape({
      code: string.isRequired,
      name: string.isRequired
    })
  ).isRequired,
  onChange: func.isRequired
};

export default ContinentSelect;

const SelectStyled = styled.select`
  width: 200px;
  margin: 0 auto;
  font-size: 20px;
`;
