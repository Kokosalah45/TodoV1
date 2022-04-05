import React, { useState } from "react";
import classNames from "classnames";
const ToDoItem = ({
  todoData,
  handleCompleted,
  handleActive,
  handleColorChange,
  handleDelete,
  colors
}) => {
  const { isActive, isCompleted, id, task, color: clr } = todoData;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = (e) => {
    if (!isActive) {
      e.type === "pointerenter" ? setIsHovered(true) : setIsHovered(false);
    } else {
      setIsHovered(false);
    }
  };
  return (
    <div
      onClick={(e) => handleActive(e, id)}
      onPointerEnter={handleMouseOver}
      onPointerLeave={handleMouseOver}
      className={classNames(
        { "task-active": isActive },
        "todo-item-container",
        { "task-hovered": isHovered }
      )}
    >
      <input
        className="checkbox-completed"
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCompleted(id)}
      />

      <p className="task">{task}</p>
      <select
        style={{
          color: clr,
          backgroundColor: "whitesmoke",
          fontWeight: "bold",
          fontSize: "1.1rem"
        }}
        value={clr}
        onChange={(e) => handleColorChange(e, id)}
      >
        <option value="unset">color ?</option>
        {colors.map((color) => (
          <option value={color}>{color}</option>
        ))}
      </select>
      <button className="deleteTodo" onClick={(e) => handleDelete(e, id)}>
        delete
      </button>
    </div>
  );
};

export default ToDoItem;
