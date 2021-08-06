import Task from "./Task";
import React from "react";
// const tasksss = [
//   {
//     id: "1",
//     descp: " lol ",
//   },
//   {
//     id: "2",
//     descp: " lol ",
//   },
//   {
//     id: "3",
//     descp: " lol ",
//   },
// ];
const CompletedTasks = ({ tasks, onDelete, setDone }) => {
  //   const [tasks, setTasks] = useState(tasksss);

  if (tasks.length === 0) {
    <h3>You have done nothing</h3>;
  }
  return (
    <>
      {/* <h3 key={task.id}> {task.descp}</h3> */}
      {tasks.map(
        (task, index) =>
          task.done && (
            <Task
              key={index}
              task={task}
              onDelete={onDelete}
              setDone={setDone}
            />
          )
      )}
    </>
  );
};

export default CompletedTasks;
