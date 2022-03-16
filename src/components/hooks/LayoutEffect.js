import { Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect } from "react";

const LayoutEffect = () => {
  useLayoutEffect(() => {
    console.log(" useLayoutEffect called before display");
  }, []);

  useEffect(() => {
    console.log(" useEffect called");
  }, []);

  return (
    <Stack>
      {" "}
      <Text> LayoutEffect </Text>
    </Stack>
  );
};

export default LayoutEffect;
