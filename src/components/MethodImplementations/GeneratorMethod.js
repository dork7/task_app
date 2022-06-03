import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const GeneratorMethod = () => {
  let index = 0;
  function* genMethod() {
    while (index <= 10) yield index++;
  }

  const [genVal, setGenVal] = useState(0);

  const handleNext = () => {
    const genNext = genMethod();
    console.log(genNext.next());
    // setGenVal(genNext.next().value);
  };

  return (
    <>
      <Button onClick={handleNext}>Next</Button>
      <Text> counter will only yield 10 times </Text>
      <Text> See console for explanation </Text>
    </>
  );
};

export default GeneratorMethod;
