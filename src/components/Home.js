import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Home = (props) => {
  console.log("props", props);
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
      <Text>React demo app !!!</Text>
      <Text>Props passed form APP {JSON.stringify(props)}</Text>
    </Flex>
  );
};

export default Home;
