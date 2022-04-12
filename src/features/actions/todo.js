import {ADD_TODO , DELETE_TODO , SET_COLOR , SET_COMPLETED_STATUS , SET_ACTIVE_STATUS , MARK_ALL_COMPLETED , CLEAR_COMPLETED} from '../constants/todo'
const addTodo = payload =>{
    return {type : ADD_TODO  , payload}
}
const deleteTodo = payload =>{
    return {type : DELETE_TODO  , payload}
}
const setColor = payload =>{
    return {type : SET_COLOR  , payload}
}
const setCompletedStatus = payload =>{
    return {type : SET_COMPLETED_STATUS  , payload}
}
const setActiveStatus = payload =>{
    return {type : SET_ACTIVE_STATUS  , payload}
}
const markAllCompleted = payload =>{
    return {type : MARK_ALL_COMPLETED  , payload}
}
const clearCompleted = payload =>{
    return {type : CLEAR_COMPLETED  , payload}
}

export {addTodo , deleteTodo , setColor , setActiveStatus ,    setCompletedStatus  , markAllCompleted , clearCompleted}