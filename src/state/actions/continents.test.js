import { actionTypes as types, populateContinents } from './continents';

describe('test `continents` action creators', () => {
  it('should return an action with correct `type` and payload', () => {
    const continents = [
      { code: 'AF', name: 'Africa' },
      { code: 'AN', name: 'Antarctica' },
      { code: 'AS', name: 'Asia' },
      { code: 'EU', name: 'Europe' },
      { code: 'NA', name: 'North America' },
      { code: 'OC', name: 'Oceania' },
      { code: 'SA', name: 'South America' }
    ];
    const expectedAction = {
      type: types.POPULATE_CONTINENTS,
      continents
    };
    expect(populateContinents(continents)).toEqual(expectedAction);
  });
});
