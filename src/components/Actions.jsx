import React from "react";
import { markAllCompleted , clearCompleted } from "../features/actions/todo";
import { useDispatch } from "react-redux";
const Actions = () => {

  const dispatch = useDispatch()
  return (
    <div className="actions">
      <h4 className="footer-header">Actions</h4>
      <div className="actions_button-group">
        <button onClick={e => dispatch(markAllCompleted({event : e , todoId : null , data : null}))} className="actions_button">
          Mark All Completed
        </button>
        <button onClick={e => dispatch(clearCompleted({event : e , todoId : null , data : null}))} className="actions_button">
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Actions;
