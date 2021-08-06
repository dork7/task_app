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
import reducer from "../reducers/tasksReducer";
import ACTIONS from "../Actions/Actions";
import CompletedTasks from "./CompletedTasks";

const FlexLayout = () => {
  const queryClient = new QueryClient();
  const [state, dispatch] = useReducer(reducer, []);

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
    const prev_task = await fetchTaskByIdReq(id);
    addTaskReq(prev_task, "deleted");
    await fetch(`http://localhost:7878/tasks/${id}`, {
      method: "DELETE",
    });
  };

  // add request
  const addTaskReq = async (task, table = "tasks") => {
    console.log(`task , table`, task, table);
    const res = await fetch(`http://localhost:7878/${table}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    console.log(res);
    return res.json();
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchTasksReq();
      console.log(data);
      dispatch({ type: ACTIONS.FETCH_DATA, payload: data });
    }
    fetchData();
  }, []);

  // delete tasks
  const deleteTask = (id) => {
    deleteTaskReq(id);
    dispatch({ type: ACTIONS.DELETE_TASK, payload: id });
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
    dispatch({ type: ACTIONS.SET_DONE, payload: id });
  };

  // Add task
  const addTaskInList = async (task) => {
    const newTask = await addTaskReq(task);
    dispatch({ type: ACTIONS.ADD_TASK, payload: newTask });
  };

  return (
    <Router>
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        // backgroundColor="gray.700"
        // grow={true}
        // height="100%"
      >
        <Stack alignContent="center" m={8}>
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
                {state.length > 0 ? (
                  <Tasks
                    tasks={state}
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

        <Stack m={8} alignContent="center">
          <Text fontSize="1xl">Completed Tasks</Text>
          <CompletedTasks
            tasks={state}
            onDelete={deleteTask}
            setDone={setDoneState}
          />
        </Stack>
        {/* <Stack m={8} alignContent="center">
          <Text fontSize="1xl">Deleted Tasks</Text>
          <CompletedTasks
            tasks={state}
            onDelete={deleteTask}
            setDone={setDoneState}
          />
        </Stack> */}
      </Flex>
    </Router>
  );
};

export default FlexLayout;
