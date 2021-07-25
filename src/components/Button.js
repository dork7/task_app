import { Button } from "@chakra-ui/react";
import React from "react";

const MButton = ({ variant, text }) => {
  // const onClick = (event) => {
  //   console.log("click", event);
  // };
  return <Button bg="green.600">{text}</Button>;
};

export default MButton;
