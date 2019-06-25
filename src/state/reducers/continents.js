import { actionTypes } from '../actions/continents';

const continents = (state = [], action) => {
  switch (action.type) {
    case actionTypes.POPULATE_CONTINENTS: {
      return [...action.continents];
    }
    default:
      return state;
  }
};

export default continents;
