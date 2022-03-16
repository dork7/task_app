import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Observables = () => {
  return (
    <>
      <Flex
        flexDir={"column"}
        alignItems="center"
        justifyContent="center"
        // backgroundColor="gray.700"
        // grow={true}
        // height="100%"
        p={4}
      >
        <Stack>
          {" "}
          <Text>RxJS / Observables </Text>
          <Text>Delayed </Text>
        </Stack>
      </Flex>
    </>
  );
};

export default Observables;
