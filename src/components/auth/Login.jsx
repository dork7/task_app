import { Box, Button, chakra, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../config/axios';
import useAuth from '../../hooks/useAuth';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { createToast } from '../notification';
import InputField from './InputFeild';
import Products from './Products';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState('');
  const [newAccessToken, setNewAccessToken] = useState('');
  const { getStoredValue, storeValue, removeValue } = useLocalStorage();

  const { auth, setAuth } = useAuth();

  const getRefreshToken = async () => {
    const options = {
      method: 'GET',
      url: `/auth/refresh-token`,
      withCredentials: true,
      headers: {
        'content-type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
    };
    const resp = await axios(options);
    setNewAccessToken(resp.data.accessToken);
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
        url: `/auth/login`,
        data: body,
        withCredentials: true,
        headers: {
          'content-type': 'application/json',
        },
      };
      const resp = await axios(options);

      createToast({
        title: 'Logged In',
        msg: resp.data.message ?? "You're now logged in.",
        type: 'success',
      });
      setResponseData(resp.data);
      const jwtToken = resp?.data?.accessToken;
      storeValue('jwtToken', jwtToken);
      setAuth({ accessToken: jwtToken });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      if (!err.response) {
        createToast({
          title: 'Something went wrong',
          // msg: err.toJSON().message,
          type: 'error',
        });
      } else {
        createToast({
          title: 'Something went wrong',
          msg: err.response.data.message ?? '',
          type: 'error',
        });
      }
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
        <Products
          token={
            newAccessToken === '' ? responseData.accessToken : newAccessToken
          }
        />
      </Flex>
    </>
  );
};

export default Login;
