export const actionTypes = {
  SET_CONTINENT: 'SET_CONTINENT',
  SET_COUNTRY: 'SET_COUNTRY'
};

export function setContinent(continent) {
  return {
    type: actionTypes.SET_CONTINENT,
    continent
  };
}

export function setCountry(country) {
  return {
    type: actionTypes.SET_COUNTRY,
    country
  };
}
