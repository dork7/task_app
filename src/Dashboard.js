import { Button } from "@chakra-ui/button";
import { Center, HStack } from "@chakra-ui/layout";
import { Icon, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon, WarningIcon } from "@chakra-ui/icons";
const Dashboard = ({ pages }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
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
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <Icon as={SunIcon} />
          ) : (
            <Icon as={MoonIcon} />
          )}
        </Button>
      </Center>
    </>
  );
};

export default Dashboard;
