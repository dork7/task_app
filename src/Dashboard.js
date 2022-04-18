import { Button } from "@chakra-ui/button";
import { Center, HStack } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ pages }) => {
  return (
    <Center>
      <HStack p={4}>
        {pages.map((page, idx) => (
          <Link key={`${page}-${idx}`} to={page.href}>
            <Button key={`${page}-${idx}`} variant="solid" colorScheme="teal">
              {page.label}
            </Button>{" "}
          </Link>
        ))}
      </HStack>
    </Center>
  );
};

export default Dashboard;
