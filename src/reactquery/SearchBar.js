import { Button, Stack, Input } from "@chakra-ui/react";
import React from "react";

export const SearchBar = ({ ...props }) => {
  return (
    <>
      <Stack direction={["column", "row"]} spacing="24px" {...props}>
        <Input
          isInvalid
          errorBorderColor="red.500"
          placeholder="Here is a sample placeholder"
        />

        <Button colorScheme="red" variant="solid" w={200}>
          Filter
        </Button>
      </Stack>
    </>
  );
};
