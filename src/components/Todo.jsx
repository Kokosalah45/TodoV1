import React, { useState, useEffect, useMemo } from "react";
import shortid from "shortid";
import Input from "./Input";
import ToDoItem from "./ToDoItem";
import Footer from "./Footer";
import classNames from "classnames";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [colors, setColors] = useState([
    "red",
    "orange",
    "blue",
    "green",
    "purple"
  ]);
  const calculateTasksLeft = (todos) => {
    return todos.filter((todo) => !todo.isCompleted).length;
  };
  const tasksLeft = useMemo(() => calculateTasksLeft(todos), [todos]);
  const [filters, setFilters] = useState({
    status: "all",
    colors: []
  });
  useEffect(() => console.log(filters));
  const isTaskExist = (task) => {
    return todos.filter((todo) => todo.task === task).length === 0;
  };

  const getTodo = (id) => {
    return [
      todos.filter((todo) => todo.id === id),
      todos.findIndex((todo) => todo.id === id)
    ];
  };
  const addTodo = (formData) => {
    if (formData.todoInput !== "" && isTaskExist(formData.todoInput)) {
      setTodos([
        ...todos,
        {
          task: formData.todoInput,
          isCompleted: false,
          isActive: false,
          color: "",
          id: shortid.generate()
        }
      ]);
    }
  };
  const deleteToDo = (e, toDoItemID) => {
    e.stopPropagation();
    const [[todo], index] = getTodo(toDoItemID);
    const todosCopy = [...todos];
    todosCopy.splice(index, 1);
    setTodos(todosCopy);
  };

  const setColor = (e, toDoItemID) => {
    const colorVal = e.target.value;
    const [[todo], index] = getTodo(toDoItemID);
    const todoCopy = { ...todo, color: colorVal };
    const todosCopy = [...todos];
    todosCopy.splice(index, 1, todoCopy);
    setTodos(todosCopy);
  };
  const setCompletedStatus = (toDoItemID) => {
    const [[todo], index] = getTodo(toDoItemID);
    const todoCopy = { ...todo, isCompleted: !todo.isCompleted };
    const todosCopy = [...todos];
    todosCopy.splice(index, 1, todoCopy);
    setTodos(todosCopy);
  };
  const setActiveStatus = (e, toDoItemID) => {
    if (e.target.nodeName === "SELECT") {
      return;
    }
    const [[todo], index] = getTodo(toDoItemID);
    const todoCopy = { ...todo, isActive: !todo.isActive };
    const todosCopy = [...todos];
    todosCopy.splice(index, 1, todoCopy);
    setTodos(todosCopy);
  };
  const setTodoFilters = (e) => {
    let newVal;
    const target = e.target;
    const type = target.type;
    const value = target.value;
    const name = target.name;
    if (type === "checkbox") {
      const isChecked = target.checked;
      if (Array.isArray(filters[name])) {
        console.log(1);
        const set = new Set([...filters[name]]);
        isChecked ? set.add(value) : set.delete(value);
        newVal = Array.from(set);
      } else {
        newVal = isChecked;
      }
    } else {
      newVal = value;
    }

    setFilters({ ...filters, [name]: newVal });
  };

  const checkColor = (todo) => {
    const selectedColor = filters.colors;
    if (
      selectedColor.length === 0 ||
      (selectedColor.length !== 0 && selectedColor.includes(todo.color))
    ) {
      return true;
    }
    return false;
  };
  const checkStatus = (todo) => {
    const selectedStatus = filters.status;
    if (selectedStatus === "active") {
      return todo.isActive;
    } else if (selectedStatus === "completed") {
      return todo.isCompleted;
    } else {
      return true;
    }
  };

  const markAllCompleted = () => {
    setTodos(
      todos.map((todo) => {
        return { ...todo, isCompleted: true };
      })
    );
  };
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  return (
    <div className="todo">
      <Input onSubmit={addTodo} />
      <div className={classNames("todos-wrapper")}>
        {todos
          .filter(checkStatus)
          .filter(checkColor)
          .map((todo) => (
            <ToDoItem
              todoData={todo}
              handleCompleted={setCompletedStatus}
              handleColorChange={setColor}
              handleDelete={deleteToDo}
              handleActive={setActiveStatus}
              key={todo.id}
              colors={colors}
            />
          ))}
      </div>

      <Footer
        colors={colors}
        statusState={filters.status}
        todoFilters={setTodoFilters}
        tasksLeft={tasksLeft}
        markAllCompleted={markAllCompleted}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};
export default Todo;
