import { Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import BasicLayout from './components/BasicLayout';

const Page404 = () => {
  return (
    <BasicLayout>
      <Text>URL NOT FOUND .. BERO</Text>
      <Link to="/">GO BACK TO SAFETY</Link>
    </BasicLayout>
  );
};

export default Page404;
