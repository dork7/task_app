import { Flex } from "@chakra-ui/react";
import React from "react";
import ReducerHook from "./ReducerHook";

const ReactHooks = () => {
  return (
    <Flex
      flexDir={"column"}
      alignItems="center"
      justifyContent="center"
      // backgroundColor="gray.700"
      // grow={true}
      // height="100%"
      p={4}
    >
      <ReducerHook />
    </Flex>
  );
};

export default ReactHooks;
