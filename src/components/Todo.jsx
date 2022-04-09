import React, { useState, useEffect, useMemo } from 'react'
import Input from './Input'
import ToDoItem from './ToDoItem'
import Footer from './Footer'
import classNames from 'classnames'
import { useTodo } from '../contexts/TodoContextProvider'
const Todo = () => {
    const {todos , checkStatus  , checkColor} = useTodo();
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
