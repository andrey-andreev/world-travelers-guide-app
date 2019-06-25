export const actionTypes = {
  POPULATE_CONTINENTS: 'POPULATE_CONTINENTS'
};

export function populateContinents(continents) {
  return {
    type: actionTypes.POPULATE_CONTINENTS,
    continents
  };
}
