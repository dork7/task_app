import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import nodemailer from "nodemailer";
// var nodemailer = window.require("nodemailer");

const MailSender = () => {
  const [response, setResponse] = useState(null);
  const sendMail = async () => {
    try {
      const res = await fetch(`http://localhost:7878`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify("task"),
      });
      console.log(res);
      setResponse(res.json());
      return res.json();
    } catch (err) {
      console.log("err", err.message);
      setResponse(JSON.stringify(err));
    }
  };
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
      <Text p={2}>Mailer</Text>
      <Button onClick={sendMail}>Send Mail</Button>
      {response && <Text p={2}>{response}</Text>}
    </Flex>
  );
};

export default MailSender;
