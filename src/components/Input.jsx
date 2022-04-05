import React, { useState } from "react";

const Input = ({ onSubmit }) => {
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
    onSubmit(formData);
    setFormData({ todoInput: "" });
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
