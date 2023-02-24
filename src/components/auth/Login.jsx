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
import Products from './Products';
import User from './User';

const Login = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState('');
  const [userList, setUserList] = useState([]);
  const [newAccessToken, setNewAccessToken] = useState('');

  const getRefreshToken = async () => {
    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_HOST_URL}/auth/refresh-token`,
      withCredentials: true,
      headers: {
        'content-type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
    };
    const resp = await axios(options);
    console.log(`resp`, resp);
    setNewAccessToken(resp.data.accessToken);
  };

  const fetchData = async (token) => {
    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_HOST_URL}/users`,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const resp = await axios(options);
    console.log(`resp`, resp);
    setUserList(resp.data.users);
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data) => {
    try {
      setIsLoading(true);

      const { email, password } = data;
      const body = {
        email,
        password,
      };

      const options = {
        method: 'post',
        url: `${process.env.REACT_APP_HOST_URL}/auth/login`,
        data: body,
        withCredentials: true,
        headers: {
          'content-type': 'application/json',
        },
      };
      const resp = await axios(options);

      toast({
        position: 'bottom',
        title: 'Logged In',
        description: resp.data.message ?? "You're now logged in.",
        duration: 5000,
        isClosable: true,
        status: 'success',
      });
      setResponseData(resp.data);
      // fetchData(resp.data.accessToken);
      setIsLoading(false);
    } catch (err) {
      toast({
        position: 'bottom',
        title: 'Something went wrong',
        description: err.response.data.message ?? '',
        duration: 5000,
        isClosable: true,
        status: 'error',
      });
      setIsLoading(false);
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
            defaultValue="vendor@sublo.co"
          />
          <InputField
            label={'Password'}
            {...{ register, errors }}
            value="password"
            required
            defaultValue="123"
            type="password"
          />
        </Flex>

        <Button
          type="submit"
          w="full"
          id="form-submit-btn"
          variant="grayButton"
          p={2}
          isLoading={isLoading}
        >
          Login
        </Button>
      </chakra.form>
      <Flex py={2} flexDirection="column">
        <Button
          w="full"
          id="form-submit-btn"
          variant="grayButton"
          p={2}
          isLoading={isLoading}
          onClick={getRefreshToken}
        >
          GET REFRESH TOKEN
        </Button>

        {newAccessToken !== '' && (
          <Box bgColor="red.500">NEW ACCESS TOKEN{newAccessToken}</Box>
        )}
      </Flex>
      <Flex flexDir="column" gap="2">
        <p>{responseData && <> Access token {responseData.accessToken} </>}</p>
        <p>
          {responseData && <> Refresh token {responseData.refreshToken} </>}
        </p>
        <p>{userList && <User users={userList} />}</p>
      </Flex>
    </>
  );
};

export default Login;
