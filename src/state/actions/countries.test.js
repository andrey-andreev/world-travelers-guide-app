import { actionTypes as types, populateCountries } from './countries';

describe('test `countries` action creators', () => {
  it('should return an action with correct `type` and payload', () => {
    const countries = [
      { name: 'Andorra', code: 'AD', emoji: '🇦🇩', __typename: 'Country' },
      { name: 'Albania', code: 'AL', emoji: '🇦🇱', __typename: 'Country' },
      { name: 'Austria', code: 'AT', emoji: '🇦🇹', __typename: 'Country' },
      { name: 'Åland', code: 'AX', emoji: '🇦🇽', __typename: 'Country' },
      { name: 'Bosnia and Herzegovina', code: 'BA', emoji: '🇧🇦', __typename: 'Country' }
    ];
    const expectedAction = {
      type: types.POPULATE_COUNTRIES,
      countries
    };
    expect(populateCountries(countries)).toEqual(expectedAction);
  });
});
