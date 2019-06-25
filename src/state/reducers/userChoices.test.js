import reducer from './userChoices';
import { actionTypes as actions } from '../actions/userChoices';

describe('test countries reducer', () => {
  const initialState = {
    continent: '',
    country: ''
  };

  it('should return the initial state', () => {
    const state = undefined;
    const action = {};
    const expectedState = { ...initialState };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('when dispatch `SET_CONTINENT` should return correct state', () => {
    const state = { ...initialState };
    const action = {
      type: actions.SET_CONTINENT,
      continent: 'EU'
    };
    const expectedState = { ...initialState, continent: action.continent };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('when dispatch `SET_COUNTRY` should return correct state', () => {
    const state = { ...initialState };
    const action = {
      type: actions.SET_COUNTRY,
      country: 'BG'
    };
    const expectedState = { ...initialState, country: action.country };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
