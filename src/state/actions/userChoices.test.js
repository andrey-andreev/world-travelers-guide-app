import { actionTypes as types, setContinent, setCountry } from './userChoices';

describe('test `userChoices` action creators', () => {
  it('`setContinent` should return an action with correct `type` and payload', () => {
    const continent = 'EU';
    const expectedAction = {
      type: types.SET_CONTINENT,
      continent
    };
    expect(setContinent(continent)).toEqual(expectedAction);
  });

  it('`setCountry` should return an action with correct `type` and payload', () => {
    const country = 'BG';
    const expectedAction = {
      type: types.SET_COUNTRY,
      country
    };
    expect(setCountry(country)).toEqual(expectedAction);
  });
});
