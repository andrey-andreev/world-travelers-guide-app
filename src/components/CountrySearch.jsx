import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';

const CountrySearch = ({ onKeyPress }) => <SearchStyled type="text" onChange={onKeyPress} />;

CountrySearch.propTypes = {
  onKeyPress: func.isRequired
};

export default CountrySearch;

const SearchStyled = styled.input`
  width: 200px;
  margin: 0 auto;
  font-size: 20px;
`;
