import React from "react";
import ColorFilter from "./ColorFilter";
import StatusFilter from "./StatusFilter";
import TasksCounter from "./TasksCounter";
import Actions from "./Actions";
const Footer = () => {
 
  return (
    <div className="todo-footer">
      <Actions/>
      <TasksCounter/>
      <StatusFilter/>
      <ColorFilter/>
    </div>
  );
};

export default Footer;
