import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContextProvider";
import { deleteTodo , setColor , setCompletedStatus , setActiveStatus} from '../features/actions/todo'
import classNames from "classnames";
const ToDoItem = ({todoData}) => {
  const {colors , todosDispatch } = useTodo()
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
      onClick={ e => todosDispatch(setActiveStatus({ event : e, todoId : id , data : null}))}
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
        onChange={ e => todosDispatch(setCompletedStatus({ event : e, todoId : id , data : null}))}
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
        onChange={ e => todosDispatch(setColor({ event : e, todoId : id , data : null}))}

      >
        <option value="unset">color ?</option>
        {colors.map((color) => (
          <option value={color}>{color}</option>
        ))}
      </select>
      <button className="deleteTodo" onClick={ e => todosDispatch(deleteTodo({ event : e, todoId : id , data : null}))}>
        delete
      </button>
    </div>
  );
};

export default ToDoItem;
