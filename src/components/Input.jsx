import React, { useState } from "react";
 import { useTodo } from "../contexts/TodoContextProvider";
import {addTodo} from '../features/actions/todo'
const Input = () => {
   const {todosDispatch} = useTodo()
  const [formData, setFormData] = useState({
    todoInput: ""
  });
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    todosDispatch(addTodo({event  : e , id : null , data : formData}));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          name="todoInput"
          value={formData.todoInput}
          onChange={handleChange}
          className="todo-input"
          type="text"
          placeholder="What needs to be Done...?"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Input;
