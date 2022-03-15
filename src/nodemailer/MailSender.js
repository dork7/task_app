import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import nodemailer from "nodemailer";
// var nodemailer = window.require("nodemailer");

const sendMail = async () => {
  const res = await fetch(`http://localhost:7878`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify("task"),
  });
  console.log(res);
  return res.json();
};

const MailSender = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      // backgroundColor="gray.700"
      // grow={true}
      // height="100%"
    >
      Mailer
      <Button onClick={sendMail}>Send Mail</Button>
    </Flex>
  );
};

export default MailSender;
