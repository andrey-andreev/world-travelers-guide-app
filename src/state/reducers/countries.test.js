import reducer from './countries';
import { actionTypes as actions } from '../actions/countries';

describe('test countries reducer', () => {
  const initialState = [];
  const sampleState = [
    { name: 'Andorra', code: 'AD', emoji: '🇦🇩' },
    { name: 'Albania', code: 'AL', emoji: '🇦🇱' },
    { name: 'Austria', code: 'AT', emoji: '🇦🇹' },
    { name: 'Åland', code: 'AX', emoji: '🇦🇽' },
    { name: 'Bosnia and Herzegovina', code: 'BA', emoji: '🇧🇦' }
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
      type: actions.POPULATE_COUNTRIES,
      countries: [...sampleState]
    };
    const expectedState = [...action.countries];
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
