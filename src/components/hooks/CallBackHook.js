import { Badge, Button, Stack, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";

const CallBackHook = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hello bro, how are you");

  const commentFunc = useCallback(() => {
    return data;
  }, [data]);

  return (
    <>
      <Stack>
        <Text> CallBackHook </Text>
        <Button
          onClick={() => {
            setToggle((prev) => !prev);
            // setData("asas");
          }}
        >
          {" "}
          Toggle state{" "}
        </Button>
        <Button
          onClick={() => {
            // setToggle((prev) => !prev);
            setData("Data is changes " + toggle);
          }}
        >
          {" "}
          Change data
        </Button>

        <ChildComponent comment={commentFunc} />
      </Stack>
      <Text p={2} w={"20vw"}>
        <Badge>NOTE: </Badge> Without using the callbackhook, when ever we click
        on toggle it will recreate the function passed to child component, check
        console for clarity
      </Text>
    </>
  );
};

const ChildComponent = ({ comment }) => {
  useEffect(() => {
    console.log("comment", comment());
  }, [comment]);

  return (
    <>
      <Stack border={"1px"} borderColor="gray.200" p={2}>
        <Text>ChildComponent</Text>

        <Badge>{comment()}</Badge>
      </Stack>
    </>
  );
};

export default CallBackHook;
