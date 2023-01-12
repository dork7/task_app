import { Box } from '@chakra-ui/react';
import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_CLIENTS = gql`
  query {
    clients {
      email
      name
      id
      projects {
        name
        description
      }
    }
  }
`;
const Clients = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS);
  console.log('data', data);
  console.log('error', error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Box border={'1px solid gray'} p={2} m={2}>
      Clients
      {data.clients.map((client) => (
        <Box key={client.id}>{client.name}</Box>
      ))}
    </Box>
  );
};

export default Clients;
