import React from "react";
import { useTodo } from "../contexts/TodoContextProvider";
const ColorFilter = () => {
  const { colors, setTodoFilters } = useTodo()
  return (
    <div className="color-filter">
      <h4 className="footer-header">Filter By Color : </h4>
      {colors.map( clr => (
        <div className="checkbox-group">
          <label htmlFor={clr}>{clr}</label>
          <input
            onChange={setTodoFilters}
            id={clr}
            key={clr}
            name="colors"
            type="checkbox"
            value={clr}
          ></input>
          <div className="color-box" style={{ backgroundColor: clr }}></div>
        </div>
      ))}
    </div>
  );
};

export default ColorFilter;
