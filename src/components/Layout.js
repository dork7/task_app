import { Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useReducer } from "react";
import { isError } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ACTIONS from "../Actions/Actions";
import { useFetchData } from "../hooks/useFetchData";
import reducer from "../reducers/tasksReducer";
import About from "./About";
import CompletedTasks from "./CompletedTasks";
import Footer from "./Footer";
import QueryFetch from "./QueryFetch";
import Tasks from "./Tasks";
import TextComponent from "./TextComponent";

const FlexLayout = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const URL = "http://localhost:7878/tasks";
  const key = "tasks";
  const enableFetch = false;
  const { data, error, isLoading } = useFetchData(key, URL, enableFetch);

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
    // fetchData();
  }, []);

  // delete tasks
  const deleteTask = (id) => {
    // deleteTaskReq(id);
    dispatch({ type: ACTIONS.DELETE_TASK, payload: id });
  };

  const setDoneState = async (id) => {
    // setDone(id);
    dispatch({ type: ACTIONS.SET_DONE, payload: id });
  };
  const setDone = async (id) => {
    const task = await fetchTaskByIdReq(id);
    const updTask = { ...task, done: !task.done };
    const res = await fetch(`http://localhost:7878/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updTask),
    });
  };

  // Add task
  const addTaskInList = async (task) => {
    // const newTask = await addTaskReq(task);
    dispatch({ type: ACTIONS.ADD_TASK, payload: task });
  };

  if (data) {
    console.log(`data from fetch query`, data);
  }
  if (error) {
    console.log(`error`, error);
  }
  // if (isLoading) {
  //   return <div>Loading ....</div>;
  // }
  useEffect(() => {
    console.log("state", state);
  }, []);

  return (
    <Router>
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        // backgroundColor="gray.700"
        // grow={true}
        // height="100%"
        w="full"
      >
        <Stack alignContent="center" m={8} w="100%">
          <Text fontSize="1xl">Tasks List</Text>
          {/* {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} setDone={setDoneState} />
          ) : (
            <h1>No task</h1>
          )}
          <TextComponent variant="filled" btnText="Add" onAdd={addTaskInList} /> */}
          {/* <MButton variant="" text="Add" onClick={onButtonClick}></MButton> */}
          <Route
            path="/todos"
            exact
            render={(props) => (
              <>
                {" "}
                {console.log(state)}
                {state?.length > 0 ? (
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
          <Route exact path="/about" component={About} />
          <Footer />
          {/* <QueryFetch /> */}
        </Stack>

        <Stack m={8} alignContent="center" w="100%">
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
