export const actionTypes = {
  POPULATE_COUNTRIES: 'POPULATE_COUNTRIES'
};

export function populateCountries(countries) {
  return {
    type: actionTypes.POPULATE_COUNTRIES,
    countries
  };
}
