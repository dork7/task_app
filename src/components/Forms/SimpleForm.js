import { Box, Flex, Input, Text, chakra, Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputField from './InputFeild';

const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log('data', data);
  };

  useEffect(() => {
    console.log('errors', errors);
  }, [errors]);

  return (
    <>
      <chakra.form onSubmit={handleSubmit(formSubmit)}>
        <Flex wrap={'wrap'}>
          <InputField
            label={'Name'}
            {...{ register, errors }}
            value="name"
            required
          />
          <InputField
            label={'Email'}
            {...{ register, errors }}
            value="email"
            required
          />
          <InputField
            label={'Phone'}
            {...{ register, errors }}
            value="phone"
            required
          />
        </Flex>
        <Button type="submit" w="full" p={2}>
          {' '}
          Save{' '}
        </Button>
      </chakra.form>
    </>
  );
};

export default SimpleForm;
