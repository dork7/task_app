import { Button, Flex, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import GeneratorMethod from "./GeneratorMethod";

const methods = ["generator"];

const MethodImplementations = () => {
  const [selectedMethod, setSelectedMethod] = useState(methods[0]);

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
      <HStack p={4}>
        {methods.map((item) => (
          <Button
            variant={"outline"}
            _focus={{
              bg: "black",
              color: "white",
            }}
            key={item}
            onClick={() => setSelectedMethod(item)}
          >
            {item}
          </Button>
        ))}
      </HStack>
      {selectedMethod === "generator" && <GeneratorMethod />}
    </Flex>
  );
};

export default MethodImplementations;
