import React from "react";
import { useTodo } from "../contexts/TodoContextProvider";
const TasksCounter = () => {
  const { tasksLeft } = useTodo()
  return (
    <div className="tasks-counter">
      <h4 className="footer-header">Remaining Todos</h4>
      <pre>{tasksLeft}</pre>
    </div>
  );
};

export default TasksCounter;
