import React , {useMemo} from "react";
import { useSelector } from "react-redux";


const TasksCounter = () => {
 const todos  = useSelector(state => state.todos)


  const calculateTasksLeft = (todos) => {
    return todos.filter((todo) => !todo.isCompleted).length
}
  const tasksLeft = useMemo(() => calculateTasksLeft(todos), [todos])
  return (
    <div className="tasks-counter">
      <h4 className="footer-header">Remaining Todos</h4>
      <pre>{tasksLeft}</pre>
    </div>
  );
};

export default TasksCounter;
