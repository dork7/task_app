import { Button, Container, Flex, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import CallBackHook from "./CallBackHook";
import ContextHook from "./ContextHook";
import ImperativeHandleHook from "./ImperativeHandleHook";
import LayoutEffect from "./LayoutEffect";
import MemoHook from "./MemoHook";
import ReducerHook from "./ReducerHook";
import RefHook from "./RefHook";

const hooks = [
  "useMemo",
  "useContextHook",
  "useReducer",
  "useRef",
  "useCallBack",
  "useImperativeHandle_useForwardRef",
];

const ReactHooks = () => {
  const [selectedHook, setSelectedHook] = useState(hooks[0]);
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
      <HStack p={4}>
        {hooks.map((item) => (
          <Button key={item} onClick={() => setSelectedHook(item)}>
            {item}
          </Button>
        ))}
      </HStack>
      {selectedHook === "useReducer" && <ReducerHook />}
      {selectedHook === "useMemo" && <MemoHook />}
      {selectedHook === "useRef" && <RefHook />}
      {selectedHook === "useCallBack" && <CallBackHook />}
      {selectedHook === "useLayoutEffect" && <LayoutEffect />}
      {selectedHook === "useContextHook" && <ContextHook />}
      {selectedHook === "useImperativeHandle_useForwardRef" && (
        <ImperativeHandleHook />
      )}
    </Flex>
  );
};

export default ReactHooks;
