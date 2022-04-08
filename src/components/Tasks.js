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
  console.log("tasks", tasks);
  return (
    <>
      {/* <h3 key={task.id}> {task.descp}</h3> */}
      {tasks.map(
        (task, index) =>
          !task.done && (
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

export default React.memo(Tasks);
