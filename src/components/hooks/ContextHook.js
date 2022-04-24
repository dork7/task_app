import { Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { UserDataProvider, useUserContext } from "./ContextProvider";

const ContextHook = () => {
  //   const { userData, setUserData } = useContext(useUserContext);
  //   useEffect(() => {
  //     // setUserData("Ali");
  //   }, []);

  return (
    <UserDataProvider>
      <Stack>
        <Text> ContextHook </Text>
        <ChildComponentA />
        <ChildComponentB />
      </Stack>
    </UserDataProvider>
  );
};

const ChildComponentA = () => {
  const { userData, setUserData } = useUserContext();
  useEffect(() => {
    setUserData("Ali");
  }, []);

  return (
    <>
      <Text>This component will set the value of userData </Text>
    </>
  );
};
const ChildComponentB = () => {
  const { userData, setUserData } = useUserContext();

  return (
    <>
      <Text>This component will get the value {userData}</Text>
    </>
  );
};

export default ContextHook;
