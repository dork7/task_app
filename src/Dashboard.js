import { Button } from "@chakra-ui/button";
import { Center, HStack } from "@chakra-ui/layout";
import React from "react";

const pages = [
  { label: "DashBoard", href: "/" },
  { label: "Todo", href: "/todos" },
  { label: "Axios", href: "/axios" },
  { label: "Chat", href: "/chat" },
  { label: "Receiver", href: "/receiver" },
  { label: "NodeMailer", href: "/nodemailer" },
  { label: "ReactHooks", href: "/react-hooks" },
  { label: "Observables", href: "/observable" },
];

const Dashboard = () => {
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
