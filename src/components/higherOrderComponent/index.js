import React from 'react';
import { Button, Stack, Flex, HStack, Text, Box } from '@chakra-ui/react';

const colors = [
  'gray.50',
  'gray.100',
  'gray.200',
  'gray.300',
  'gray.400',
  'gray.500',
  'gray.600',
];

const HOC = () => {
  return (
    <Flex
      flexDir={'column'}
      alignItems="center"
      justifyContent="center"
      backgroundColor="gray.700"
      //   grow={true}
      // height="100%"

      p={4}
    >
      {colors.map((item) => (
        <HOCWrapper color={item}>
          <ChildComponent />
        </HOCWrapper>
      ))}
    </Flex>
  );
};

const HOCWrapper = ({ children, ...props }) => {
  const { color } = props;
  return (
    <Box w="full" bgColor={color}>
      {children}
    </Box>
  );
};

const ChildComponent = () => {
  return (
    <>
      <Text align={'center'}>Child component</Text>
    </>
  );
};

export default HOC;
