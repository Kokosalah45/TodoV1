import React from "react";
import { useTodo } from "../contexts/TodoContextProvider";
const StatusFilter = () => {
  const { setTodoFilters, filters : {status} } = useTodo()
  return (
    <div className="status-filter">
      <h4 className="footer-header">Filter By Status : </h4>
      <div className="radio-group">
        <label htmlFor="All">All</label>
        <input
          onChange={setTodoFilters}
          type="radio"
          id="all"
          value="all"
          name="status"
          checked={status === "all"}
        />
      </div>
      <div className="radio-group">
        <label htmlFor="completed">Completed</label>
        <input
          onChange={setTodoFilters}
          type="radio"
          id="completed"
          value="completed"
          name="status"
          checked={status === "completed"}
        />
      </div>
      <div className="radio-group">
        <label htmlFor="active">Active</label>
        <input
          onChange={setTodoFilters}
          type="radio"
          id="active"
          value="active"
          name="status"
          checked={status === "active"}
        />
      </div>
    </div>
  );
};
export default StatusFilter;
