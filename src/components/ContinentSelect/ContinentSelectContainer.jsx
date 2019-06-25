import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import QueryCountries from '../QueryCountries/QueryCountries';
import { GET_CONTINENTS } from '../../queries';
import { populateContinents } from '../../state/actions/continents';
import ContinentSelect from './ContinentSelect';

const ContinentSelectContainer = ({ setContinents }) => (
  <QueryCountries query={GET_CONTINENTS}>
    {data => {
      setContinents(data.continents);
      return <ContinentSelect />;
    }}
  </QueryCountries>
);

ContinentSelectContainer.propTypes = {
  setContinents: func.isRequired
};

export default connect(
  null,
  { setContinents: populateContinents }
)(ContinentSelectContainer);
