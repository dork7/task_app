import React from 'react';
import BasicLayout from '../BasicLayout';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  return (
    <BasicLayout>
      <Login />
      {/* <Register /> */}
    </BasicLayout>
  );
};

export default Auth;
