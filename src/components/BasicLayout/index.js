import { Flex } from '@chakra-ui/react';
import React from 'react';

const BasicLayout = ({ children, ...props }) => {
  return (
    <Flex
      flexDir={'column'}
      alignItems="center"
      justifyContent="center"
      backgroundColor="gray.700"
      grow={true}
      // height="100vh"
      p={4}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default BasicLayout;
