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
const Tasks = ({ tasks, onDelete, setDone }) => {
  //   const [tasks, setTasks] = useState(tasksss);
  return (
    <>
      {/* <h3 key={task.id}> {task.descp}</h3> */}
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} setDone={setDone} />
      ))}
    </>
  );
};

export default Tasks;
