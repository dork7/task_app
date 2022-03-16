import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Button, Stack, Text } from "@chakra-ui/react";

const ImperativeHandleHook = () => {
  const ref = useRef();
  return (
    <Stack>
      <Text> ImperativeHandleHook / useForwardRef </Text>
      <Button
        onClick={() => {
          ref.current.triggerFunc();
        }}
      >
        {" "}
        Toggle State using ref
      </Button>
      <ChildComponent ref={ref} />
    </Stack>
  );
};

const ChildComponent = forwardRef((props, ref) => {
  const [val, setVal] = useState("hello");
  useImperativeHandle(ref, () => ({
    triggerFunc() {
      console.log("This function is triggered by its parent using fwd Ref");
      setVal("bye");
    },
  }));
  return (
    <>
      <Button onClick={() => setVal("hello")}>{val}</Button>
    </>
  );
});
export default ImperativeHandleHook;
