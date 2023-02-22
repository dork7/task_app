import { Button, chakra, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from './InputFeild';

const Login = () => {
  const [submittedMsg, setSubmittedMsg] = useState('');
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
        url: `http://localhost:4000/v1/auth/login`,
        data: body,
        headers: {
          'content-type': 'application/json',
        },
      };
      const resp = await axios(options);
      console.log('resp :>> ', resp.data);
      setTimeout(() => {
        setSubmittedMsg('Form Submitted');
      }, 500);
    } catch (err) {
      console.log('err :>> ', err.response.data);
    }
  };

  useEffect(() => {
    // console.log('errors', errors);
    register('date');
  }, []);

  const onDateChange = (date) => {
    setValue('date', date.format());
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

        <Button type="submit" w="full" id="form-submit-btn" p={2}>
          {' '}
          Save{' '}
        </Button>
        <Text id="is-submitted">{submittedMsg}</Text>
      </chakra.form>
    </>
  );
};

export default Login;
