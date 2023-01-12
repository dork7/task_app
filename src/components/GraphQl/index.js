import { Flex } from '@chakra-ui/react';
import React from 'react';
import BasicLayout from '../BasicLayout';
import Clients from './Clients';
import Projects from './Projects';

const GraphQl = () => {
  return (
    <BasicLayout>
      <Flex flexDir="row" justify={'space-between'}>
        <Clients />
        <Projects />
      </Flex>
    </BasicLayout>
  );
};

export default GraphQl;
