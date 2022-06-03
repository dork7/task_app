import { Button, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import SimpleForm from './SimpleForm';

const forms = ['simple'];
const Forms = () => {
  const [selectedForm, setSelectedForm] = useState(forms[0]);
  return (
    <>
      <Flex
        flexDir={'column'}
        alignItems="center"
        justifyContent="center"
        // backgroundColor="gray.700"
        // grow={true}
        // height="100%"
        p={4}
      >
        <Text id="title">Forms</Text>
        <HStack p={4}>
          {forms.map((item) => (
            <Button
              variant={'outline'}
              bg={'gray.600'}
              color="black"
              _focus={{
                bg: 'black',
                color: 'white',
              }}
              id={item}
              key={`btn-${item}`}
              onClick={() => setSelectedForm(item)}
            >
              {item}
            </Button>
          ))}
        </HStack>
        <Stack> {selectedForm === 'simple' && <SimpleForm />}</Stack>
      </Flex>
    </>
  );
};

export default Forms;
