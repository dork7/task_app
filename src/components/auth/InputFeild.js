import { Flex, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const InputField = ({ label, value, required, register, errors, ...props }) => {
  return (
    <>
      <Text>{label}</Text>
      <Input
        id={value}
        border={'2px solid red'}
        {...register(value, { required: `${label} is required` })}
        isInvalid={errors?.[value] && true}
        test-id={value}
        {...props}
      />
      <Text color={'red'}>{errors?.[value]?.message}</Text>
    </>
  );
};

export default InputField;
