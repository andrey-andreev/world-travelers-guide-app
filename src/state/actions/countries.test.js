import { actionTypes as types, populateCountries } from './countries';

describe('test `countries` action creators', () => {
  it('should return an action with correct `type` and payload', () => {
    const countries = [
      { name: 'Andorra', code: 'AD', emoji: '🇦🇩' },
      { name: 'Albania', code: 'AL', emoji: '🇦🇱' },
      { name: 'Austria', code: 'AT', emoji: '🇦🇹' },
      { name: 'Åland', code: 'AX', emoji: '🇦🇽' },
      { name: 'Bosnia and Herzegovina', code: 'BA', emoji: '🇧🇦' }
    ];
    const expectedAction = {
      type: types.POPULATE_COUNTRIES,
      countries
    };
    expect(populateCountries(countries)).toEqual(expectedAction);
  });
});
