import { Button, chakra, Flex, Text, useToast } from '@chakra-ui/react';
import { DatePicker } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from './InputFeild';
const ChakraDatePicker = chakra(DatePicker);

const Register = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data) => {
    try {
      console.log('process.env.HOST_URL :>> ', process.env);
      const { email, password, name } = data;
      const body = {
        email,
        password,
        name,
      };

      const options = {
        method: 'post',
        url: `${process.env.REACT_APP_HOST_URL}/auth/register`,
        data: body,
        headers: {
          'content-type': 'application/json',
        },
      };
      const resp = await axios(options);
      console.log('resp :>> ', resp.data);

      toast({
        position: 'bottom',
        title: 'Registered!!!',
        description: resp.data.message ?? "You're now registered",
        duration: 5000,
        isClosable: true,
        status: 'success',
      });
    } catch (err) {
      toast({
        position: 'bottom',
        title: 'Something went wrong',
        description: err.response.data.message ?? '',
        duration: 5000,
        isClosable: true,
        status: 'error',
      });
    }
  };

  return (
    <>
      {' '}
      <chakra.form onSubmit={handleSubmit(formSubmit)} id="chakra-form">
        <Flex flexDir="column" gap={2}>
          <InputField
            label={'Name'}
            {...{ register, errors }}
            value="fullName"
            required
          />
          <InputField
            label={'Email'}
            {...{ register, errors }}
            value="email"
            required
          />
          {/* <InputField
            label={'Phone'}
            {...{ register, errors }}
            value="phone"
            required
          /> */}
          <InputField
            label={'Password'}
            {...{ register, errors }}
            value="password"
            required
            type="password"
          />
        </Flex>

        <Button
          type="submit"
          w="full"
          id="form-submit-btn"
          p={2}
          variant="grayButton"
        >
          {' '}
          Register{' '}
        </Button>
      </chakra.form>
    </>
  );
};

export default Register;
