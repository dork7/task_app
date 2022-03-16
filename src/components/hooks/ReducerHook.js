import { Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useState, useReducer } from "react";

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducerFunc, {
    count: 0,
    doubleCount: 0,
  });

  const inc = () => {
    dispatch({ type: "inc" });
  };
  const dec = () => {
    dispatch({ type: "dec" });
  };
  return (
    <HStack>
      <Stack>
        <Text> ReducerHook </Text>

        <Button onClick={inc}>INC</Button>
        <Button onClick={dec}>DEC</Button>
      </Stack>
      <Stack>
        <Text>Single {state.count}</Text>
        <Text>Double {state.doubleCount}</Text>
      </Stack>
    </HStack>
  );
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1, doubleCount: state.doubleCount + 2 };
    case "dec":
      return { count: state.count - 1, doubleCount: state.doubleCount - 2 };
    default:
      return state;
  }
};

export default ReducerHook;
