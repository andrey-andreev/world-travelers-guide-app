import reducer from './continents';
import { actionTypes as actions } from '../actions/continents';

describe('test continents reducer', () => {
  const initialState = [];
  const sampleState = [
    { code: 'AF', name: 'Africa' },
    { code: 'AN', name: 'Antarctica' },
    { code: 'AS', name: 'Asia' },
    { code: 'EU', name: 'Europe' },
    { code: 'NA', name: 'North America' },
    { code: 'OC', name: 'Oceania' },
    { code: 'SA', name: 'South America' }
  ];

  it('should return the initial state', () => {
    const state = undefined;
    const action = {};
    const expectedState = [...initialState];
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should return `sampleState`', () => {
    const state = [];
    const action = {
      type: actions.POPULATE_CONTINENTS,
      continents: [...sampleState]
    };
    const expectedState = [...action.continents];
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
