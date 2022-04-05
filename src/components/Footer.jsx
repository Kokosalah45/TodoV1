import React, { useState } from "react";
import ColorFilter from "./ColorFilter";
import StatusFilter from "./StatusFilter";
import TasksCounter from "./TasksCounter";
import Actions from "./Actions";
const Footer = ({
  colors,
  todoFilters,
  statusState,
  tasksLeft,
  markAllCompleted,
  clearCompleted
}) => {
  return (
    <div className="todo-footer">
      <Actions
        markAllCompleted={markAllCompleted}
        clearCompleted={clearCompleted}
      />
      <TasksCounter tasksLeft={tasksLeft} />
      <StatusFilter statusState={statusState} statusFilter={todoFilters} />
      <ColorFilter colors={colors} colorFilter={todoFilters} />
    </div>
  );
};

export default Footer;
