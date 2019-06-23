import gql from 'graphql-tag';

export const GET_CONTINENTS = gql`
  {
    continents {
      code
      name
    }
  }
`;

export const GET_CONTINENT = code => gql`
{
  continent (code: "${code}") {
    name
    countries {
      name
      code
      emoji
    }
  }
}
`;

export const GET_COUNTRY = code => gql`
{
  country(code: "${code}") {
    code
    name
    native
    phone
    emoji
    currency
    languages {
      code
      name
      native
    }
  }
}
`;
