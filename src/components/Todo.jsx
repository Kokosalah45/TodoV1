import React from 'react'
import Input from './Input'
import ToDoItem from './ToDoItem'
import Footer from './Footer'
import classNames from 'classnames'
import { useTodo } from '../contexts/TodoContextProvider'
import { useSelector } from 'react-redux'
const Todo = () => {
    const {checkStatus  , checkColor} = useTodo();
    const todos = useSelector(state => state.todos);

    return (
        <div className="todo">
            <Input/>
            <div className={classNames('todos-wrapper')}>
                
                {todos
                    .filter(checkStatus)
                    .filter(checkColor)
                    .map((todo) => (
                        <ToDoItem
                            todoData={todo}
                            key={todo.id}
                        />
                    ))}
            </div>

            <Footer/>
        </div>
    )
}
export default Todo
