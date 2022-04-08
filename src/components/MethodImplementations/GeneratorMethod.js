import { Button, Text } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";

const GeneratorMethod = () => {
  let index = 0;
  function* genMethod() {
    while (true) yield index++;
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
      <Text>{genVal}</Text>
    </>
  );
};

export default GeneratorMethod;
