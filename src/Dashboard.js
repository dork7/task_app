import { Button } from "@chakra-ui/button";
import { Center, HStack } from "@chakra-ui/layout";
import React from "react";

const Dashboard = ({ pages }) => {
  return (
    <Center>
      <HStack p={4}>
        {pages.map((page, idx) => (
          <Button
            key={`${page}-${idx}`}
            as="a"
            href={page.href}
            variant="solid"
            colorScheme="teal"
          >
            {page.label}
          </Button>
        ))}
      </HStack>
    </Center>
  );
};

export default Dashboard;
