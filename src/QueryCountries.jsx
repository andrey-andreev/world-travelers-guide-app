import React from 'react';
import { shape, array, func, string } from 'prop-types';
import ApolloClient from 'apollo-boost';
import { Query } from 'react-apollo';

const client = new ApolloClient({ uri: 'https://countries.trevorblades.com' });

const QueryCountries = ({ children, query }) => (
  <Query query={query} client={client}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error.message}</p>;
      return children(data);
    }}
  </Query>
);

QueryCountries.propTypes = {
  children: func.isRequired,
  query: shape({
    // There should be a better way to validate this prop
    kind: string.isRequired,
    definitions: array.isRequired
  }).isRequired
};

export default QueryCountries;
