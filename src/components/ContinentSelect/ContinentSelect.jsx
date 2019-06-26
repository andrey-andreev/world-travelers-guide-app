import React, { Component } from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setContinent } from '../../state/actions/userChoices';

export class ContinentSelectPresenter extends Component {
  onContinentChange = event => {
    const { chooseContinent } = this.props;
    chooseContinent(event.target.value);
  };

  render() {
    const { continent, continents } = this.props;
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

ContinentSelectPresenter.defaultProps = {
  continent: ''
};

ContinentSelectPresenter.propTypes = {
  continent: string,
  continents: arrayOf(
    shape({
      code: string.isRequired,
      name: string.isRequired
    })
  ).isRequired,
  chooseContinent: func.isRequired
};

const mapStateToProps = state => ({
  continent: state.userChoices.continent,
  continents: state.continents
});

export default connect(
  mapStateToProps,
  { chooseContinent: setContinent }
)(ContinentSelectPresenter);

export const SelectStyled = styled.select`
  width: 240px;
  margin: 0 auto;
  font-size: 20px;
  margin-bottom: 20px;
`;
