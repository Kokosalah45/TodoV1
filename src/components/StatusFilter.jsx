import React from "react";

const StatusFilter = ({ statusFilter, statusState }) => {
  return (
    <div className="status-filter">
      <h4 className="footer-header">Filter By Status : </h4>
      <div className="radio-group">
        <label htmlFor="All">All</label>
        <input
          onChange={statusFilter}
          type="radio"
          id="all"
          value="all"
          name="status"
          checked={statusState === "all"}
        />
      </div>
      <div className="radio-group">
        <label htmlFor="completed">Completed</label>
        <input
          onChange={statusFilter}
          type="radio"
          id="completed"
          value="completed"
          name="status"
          checked={statusState === "completed"}
        />
      </div>
      <div className="radio-group">
        <label htmlFor="active">Active</label>
        <input
          onChange={statusFilter}
          type="radio"
          id="active"
          value="active"
          name="status"
          checked={statusState === "active"}
        />
      </div>
    </div>
  );
};
export default StatusFilter;
