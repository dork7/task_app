import {
  Button,
  chakra,
  Flex,
  Text,
  useToast,
  Container,
  Box,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from './InputFeild';

const Login = () => {
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
      const { email, password } = data;
      const body = {
        email,
        password,
      };

      const options = {
        method: 'post',
        url: `${process.env.REACT_APP_HOST_URL}/auth/login`,
        data: body,
        headers: {
          'content-type': 'application/json',
        },
      };
      const resp = await axios(options);
      console.log('resp :>> ', resp.data);

      toast({
        position: 'bottom',
        title: 'Logged In',
        description: resp.data.message ?? "You're now logged in.",
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
        <Flex flexDir="column" gap="2">
          <InputField
            label={'Email'}
            {...{ register, errors }}
            value="email"
            required
          />
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
          variant="grayButton"
          p={2}
        >
          Login
        </Button>
      </chakra.form>
    </>
  );
};

export default Login;
