import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import React from "react";
import BasicLayout from "../BasicLayout";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const logout = () => {};
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
      <Button variant={"blackButton"} onClick={logout}>
        LOGOUT
      </Button>
    </BasicLayout>
  );
};

export default Auth;
