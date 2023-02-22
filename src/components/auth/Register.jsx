import {
  Box,
  Flex,
  Input,
  Text,
  chakra,
  Button,
  Select,
  Checkbox,
  HStack,
  Textarea,
} from '@chakra-ui/react';
import { DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from './InputFeild';
import moment from 'moment';
const ChakraDatePicker = chakra(DatePicker);

const Register = () => {
  const [date, setDate] = useState(new Date());
  const [submittedMsg, setSubmittedMsg] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log('data', data);
    setTimeout(() => {
      setSubmittedMsg('Form Submitted');
    }, 500);
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
        <Flex flexDir="column">
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
          Register{' '}
        </Button>
        <Text id="is-submitted">{submittedMsg}</Text>
      </chakra.form>
    </>
  );
};

export default Register;
