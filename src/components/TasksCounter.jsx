import React from "react";

const TasksCounter = ({ tasksLeft }) => {
  return (
    <div className="tasks-counter">
      <h4 className="footer-header">Remaining Todos</h4>
      <pre>{tasksLeft}</pre>
    </div>
  );
};

export default TasksCounter;
