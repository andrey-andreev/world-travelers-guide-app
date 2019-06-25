import { actionTypes } from '../actions/userChoices';

const initialState = {
  continent: '',
  country: ''
};

const userChoices = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONTINENT: {
      return {
        continent: action.continent,
        country: ''
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
