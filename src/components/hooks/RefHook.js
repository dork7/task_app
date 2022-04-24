import { Button, Input, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

const RefHook = () => {
  const ref = useRef();
  useEffect(() => {
    // ref.current.value = 123;
  }, []);

  return (
    <Stack>
      <Text> RefHook </Text>
      <Button onClick={() => ref.current.focus()}>
        Click to focus on input
      </Button>
      <Input placeholder="Enter something" ref={ref} />
    </Stack>
  );
};

export default RefHook;
