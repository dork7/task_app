import { Button, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(1);
  const [showHide, setShowHide] = useState(true);
  const [dataSet, setDataSet] = useState([]);
  useEffect(() => {
    console.log(" This UE will run only once");
    return () => {
      console.log("Cleaning up-- only when component unmounts");
    };
  }, []);
  useEffect(() => {
    console.log(" This UE will run on state change of count");

    return () => {
      console.log("Cleaning up-- when component is updated");
    };
  }, [count]);
  useEffect(() => {
    console.log(" This UE will run every time the component is rendered");
    return () => {
      console.log("Cleaning up-- every time the component is rendered");
    };
  });
  useEffect(() => {
    (async () => {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${count}`
      );
      setDataSet(resp.data);
    })();
  }, [count]);

  return (
    <Stack>
      {" "}
      <Button onClick={() => setShowHide(!showHide)}> Hide / unmount </Button>
      {showHide && (
        <>
          <Button onClick={() => setCount((prev) => prev + 1)}> Inc </Button>
          <Text> See console for explanation </Text>
          <Text> {count} </Text>
          <Text> Testing axios with useEffect </Text>
          <Text> {JSON.stringify(dataSet)} </Text>
        </>
      )}
    </Stack>
  );
};

export default UseEffect;
