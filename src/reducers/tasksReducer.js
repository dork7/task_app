import ACTIONS from "../Actions/Actions";

const reducer = (tasks, action) => {
  // console.log(`state`, tasks);

  // console.log(`action`, action.payload);
  switch (action.type) {
    case ACTIONS.FETCH_DATA:
      // console.log(` [...tasks, action.payload]`, [...tasks, action.payload]);
      return action.payload;
    case ACTIONS.ADD_TASK:
      console.log("tasks", tasks);
      return [...tasks, action.payload];
    case ACTIONS.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.payload);
    case ACTIONS.SET_DONE:
      return tasks.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
    default:
      return tasks;
  }
};

export default reducer;
