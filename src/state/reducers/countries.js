import { actionTypes } from '../actions/countries';

const countries = (state = [], action) => {
  switch (action.type) {
    case actionTypes.POPULATE_COUNTRIES: {
      return [...action.countries];
    }
    default:
      return state;
  }
};

export default countries;
