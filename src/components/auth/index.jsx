import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';
import BasicLayout from '../BasicLayout';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  return (
    <BasicLayout>
      <Tabs variant="enclosed" w="400px">
        <TabList>
          <Tab>Login</Tab>
          <Tab>Register</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <Register />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </BasicLayout>
  );
};

export default Auth;
