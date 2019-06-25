import { actionTypes } from '../actions/userChoices';

const initialState = {
  selectedContinentCode: null,
  selectedCountryCode: null
};

const userChoices = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONTINENT: {
      return {
        continent: action.continent,
        country: null
      };
    }
    case actionTypes.SET_COUNTRY: {
      return {
        ...state,
        country: action.country
      };
    }
    default:
      return state;
  }
};

export default userChoices;
