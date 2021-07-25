import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Tasks from "./Tasks";
import TextComponent from "./TextComponent";
import { useState, useEffect, useReducer } from "react";
import Footer from "./Footer";
import About from "./About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import QueryFetch from "./QueryFetch";

const FlexLayout = () => {
  const queryClient = new QueryClient();
  const tasksss = [];
  const [tasks, setTasks] = useState(tasksss);

  // fetch tasks
  const fetchTasksReq = async () => {
    const res = await fetch("http://localhost:7878/tasks");
    const data = await res.json();
    return data;
  };
  // fetch task by id
  const fetchTaskByIdReq = async (id) => {
    const res = await fetch(`http://localhost:7878/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // delete request
  const deleteTaskReq = async (id) => {
    await fetch(`http://localhost:7878/tasks/${id}`, {
      method: "DELETE",
    });
  };

  // add request
  const addTaskReq = async (task) => {
    const res = await fetch(`http://localhost:7878/tasks`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    console.log(res);
    return res.json();
  };

  // useEffect(async () => {
  //   setTasks(await fetchTasksReq());
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchTasksReq();
      // ...
      setTasks(response);
    }
    fetchData();
  }, []);

  // delete tasks
  const deleteTask = (id) => {
    // setDone(2);
    deleteTaskReq(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const setDoneState = async (id) => {
    console.log(`id`, id);
    const task = await fetchTaskByIdReq(id);
    const updTask = { ...task, done: !task.done };
    const res = await fetch(`http://localhost:7878/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updTask),
    });
    console.log(`res`, await res.json());
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );

    // setTasks(newArr);
  };

  // Add task
  const addTaskInList = async (task) => {
    console.log("add task", task, ...tasks);
    const newTask = await addTaskReq(task);
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <Flex
        alignItems="center"
        justifyContent="center"
        // backgroundColor="gray.700"
        // grow={true}
        // height="100%"
      >
        <Stack alignContent="center">
          <Text fontSize="1xl">Tasks List</Text>
          {/* {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} setDone={setDoneState} />
          ) : (
            <h1>No task</h1>
          )}
          <TextComponent variant="filled" btnText="Add" onAdd={addTaskInList} /> */}
          {/* <MButton variant="" text="Add" onClick={onButtonClick}></MButton> */}
          <Route
            path="/"
            exact
            render={(props) => (
              <>
                {" "}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    setDone={setDoneState}
                  />
                ) : (
                  <h1>No task</h1>
                )}
                <TextComponent
                  variant="filled"
                  btnText="Add"
                  onAdd={addTaskInList}
                />
              </>
            )}
          />
          <Route path="/about" component={About} />
          <Footer />
          <QueryClientProvider client={queryClient}>
            <QueryFetch />
          </QueryClientProvider>
        </Stack>
      </Flex>
    </Router>
  );
};

export default FlexLayout;
