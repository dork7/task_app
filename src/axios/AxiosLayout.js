import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

axios.interceptors.request.use(
  (config) => {
    // console.log(`Interceptor config`, config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const AxiosLayout = () => {
  const [requestData, setRequestData] = useState({
    status: "",
    headers: "",
    data: [],
    config: "",
  });

  const handleGet = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: { _limit: 5 },
      })
      .then((res) => {
        console.log(`res`, res);
        setRequestData({
          status: res.status,
          headers: res.headers,
          data: res.data,
          config: res.config,
        });
      })
      .catch((err) => {
        console.log(`err`, err);
      });
  };
  const handlePost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        data: {
          title: "New Todo",
          completed: false,
        },
      })
      .then((res) => {
        console.log(`res`, res);
        setRequestData({
          status: res.status,
          headers: res.headers,
          data: res.data,
          config: res.config,
        });
      });
  };
  const handlePut = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/todos/1", {
        data: {
          title: "Updated Todo",
          completed: true,
        },
      })
      .then((res) => {
        console.log(`res`, res);
        setRequestData({
          status: res.status,
          headers: res.headers,
          data: res.data,
          config: res.config,
        });
      });
  };
  const handleDelete = () => {
    axios.delete("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      console.log(`res`, res);
      setRequestData({
        status: res.status,
        headers: res.headers,
        data: res.data,
        config: res.config,
      });
    });
  };
  const handleSim = () => {
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/todos"),
        axios.get("https://jsonplaceholder.typicode.com/posts"),
      ])
      .then(
        axios.spread((todos, posts) => {
          setRequestData({
            status: "see console",
            headers: "see console",
            data: "see console",
            config: "see console",
          });
          console.log(`todos`, todos);
          console.log(`posts`, posts);
        })
      );
  };
  const handleCustom = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "tokeeen",
      },
    };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        data: {
          title: "New Todo",
          completed: false,
        },
        config,
      })
      .then((res) => {
        console.log(`res`, res);
        setRequestData({
          status: res.status,
          headers: res.headers,
          data: res.data,
          config: res.config,
        });
      });
  };
  const handleTrans = () => {
    const options = {
      method: "post",
      url: "https://jsonplaceholder.typicode.com/todos",
      data: { title: "hello world" },
      transformResponse: axios.defaults.transformResponse.concat((data) => {
        data.title =
          data.title.toUpperCase() +
          "    E.G Data is transformed into upper case ";
        return data;
      }),
    };
    axios(options).then((res) => {
      console.log(`res`, res);
      setRequestData({
        status: res.status,
        headers: res.headers,
        data: res.data,
        config: res.config,
      });
    });
  };
  const handleError = () => {};
  const handleCancel = () => {};

  // INTERCEPTOR

  return (
    <Flex m={4} display="flex" direction="column" alignItems="center" p={6}>
      <HStack spacing={4}>
        <Button colorScheme="teal" onClick={handleGet}>
          Get
        </Button>
        <Button colorScheme="teal" onClick={handlePost}>
          Post
        </Button>
        <Button colorScheme="teal" onClick={handlePut}>
          Put/Patch
        </Button>
        <Button colorScheme="teal" onClick={handleDelete}>
          Delete{" "}
        </Button>
        <Button colorScheme="teal" onClick={handleSim}>
          Sim Req
        </Button>
        <Button colorScheme="teal" onClick={handleCustom}>
          Custom Headers
        </Button>
        <Button colorScheme="teal" onClick={handleTrans}>
          Transform
        </Button>
        <Button colorScheme="teal" onClick={handleError}>
          Error Handling
        </Button>
        <Button colorScheme="teal" onClick={handleCancel}>
          Cancel
        </Button>
      </HStack>
      <Box bg="gray.300" w="100%" p={4} color="black" m={4} borderRadius={4}>
        Status: {requestData.status}
      </Box>

      <Accordion w="100%" allowToggle defaultIndex={[0]} m={4}>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
              <Box flex="1" textAlign="left">
                Headers
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>{JSON.stringify(requestData.headers)}</AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion w="100%" allowToggle defaultIndex={[0]} m={4}>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
              <Box flex="1" textAlign="left">
                Data
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            {JSON.stringify(requestData.data)}
            {/* {requestData.data?.map((item, idx) => {
              return <Text key={idx}> {item.title}</Text>;
            })} */}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion w="100%" allowToggle defaultIndex={[0]} m={4}>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
              <Box flex="1" textAlign="left">
                Config
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>{JSON.stringify(requestData.config)}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default AxiosLayout;
