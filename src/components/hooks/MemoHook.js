import { Badge, Button, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const MemoHook = () => {
  const [data, setData] = useState();
  const [renderCount, setRenderCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((data) => {
      setData(data.data);
      console.log("data", data);
    });
  }, []);
  const findLongestName = (data) => {
    let longestName = ""; //data[0]?.name;
    data?.forEach((comment) => {
      if (longestName.length < comment.name.length) {
        // console.log("comment.name", comment.name);
        longestName = comment.name;
      }
    });
    console.log("longestName", longestName);
    return longestName;
  };
  const memoFunc = useMemo(() => findLongestName(data), [data]);

  return (
    <Stack>
      {/* <Badge>Render count {renderCount}</Badge> */}
      <Text> Longest Name -> {memoFunc} </Text>
      <Button onClick={() => setToggle((prev) => !prev)}>
        Change in toggle state will recalculate longest name -{" "}
        <Badge>toggle state {toggle ? "hello" : "bye"}</Badge>
      </Button>
    </Stack>
  );
};

export default MemoHook;
