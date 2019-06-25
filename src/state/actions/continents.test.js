import { actionTypes as types, populateContinents } from './continents';

describe('test `continents` action creators', () => {
  it('should return an action with correct `type` and payload', () => {
    const continents = [
      { code: 'AF', name: 'Africa', __typename: 'Continent' },
      { code: 'AN', name: 'Antarctica', __typename: 'Continent' },
      { code: 'AS', name: 'Asia', __typename: 'Continent' },
      { code: 'EU', name: 'Europe', __typename: 'Continent' },
      { code: 'NA', name: 'North America', __typename: 'Continent' },
      { code: 'OC', name: 'Oceania', __typename: 'Continent' },
      { code: 'SA', name: 'South America', __typename: 'Continent' }
    ];
    const expectedAction = {
      type: types.POPULATE_CONTINENTS,
      continents
    };
    expect(populateContinents(continents)).toEqual(expectedAction);
  });
});
