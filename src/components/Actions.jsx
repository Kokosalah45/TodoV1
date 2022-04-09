import React from "react";
import { useTodo } from "../contexts/TodoContextProvider";
const Actions = () => {
  const { markAllCompleted, clearCompleted } = useTodo()
  return (
    <div class="actions">
      <h4 className="footer-header">Actions</h4>
      <div className="actions_button-group">
        <button onClick={markAllCompleted} class="actions_button">
          Mark All Completed
        </button>
        <button onClick={clearCompleted} class="actions_button">
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Actions;
