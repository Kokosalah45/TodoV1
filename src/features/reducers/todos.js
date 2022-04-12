import {ADD_TODO , DELETE_TODO , SET_COLOR , SET_COMPLETED_STATUS , SET_ACTIVE_STATUS , MARK_ALL_COMPLETED , CLEAR_COMPLETED} from '../constants/todo'
import shortid from 'shortid';

const isTaskExist = (currentTodos , task) => {
    return currentTodos.filter((todo) => todo.task === task).length === 0
}
const getTodo = (currentTodos,id) => {
    return {
        todo : currentTodos.find((todo) => todo.id === id) ,
        index : currentTodos.findIndex((todo) => todo.id === id),
    }
       
    
}
const todosReducer = (state = [], action) =>{

  const currentTodos = state;
  const actionType = action.type;
  const {event , todoId , data } = action.payload || {};
  const {todo,index} = getTodo(currentTodos , todoId)
  const todosCopy = [...currentTodos];
  const todoCopy = {...todo};
  switch(actionType){
        case ADD_TODO : 
         if (data.todoInput !== '' && isTaskExist( state , data.todoInput)) {
            return [
                ...state, 
                {
                task : data.todoInput, 
                isCompleted: false,
                isActive: false,
                color: '',
                id: shortid.generate()
            }
            ]
         }
         return currentTodos
         case DELETE_TODO : 
            event.stopPropagation();
            todosCopy.splice(index, 1)
            return todosCopy;
        case SET_COLOR : 
            const colorVal = event.target.value
            todosCopy.splice(index, 1, Object.assign(todoCopy , {color : colorVal}))
            return todosCopy;
        case SET_COMPLETED_STATUS : 
            todosCopy.splice(index, 1, Object.assign(todoCopy , {isCompleted : !todo.isCompleted}))
            return todosCopy;
        case SET_ACTIVE_STATUS :
             if(event.target.nodeName === "SELECT"){
                 return currentTodos
             }
             todosCopy.splice(index, 1, Object.assign(todoCopy , {isActive : !todo.isActive}))
             return todosCopy;
        
        case MARK_ALL_COMPLETED : 
            return currentTodos.map( todo => ({ ...todo, isCompleted: true }) );
        case CLEAR_COMPLETED:
            return currentTodos.filter((todo) => !todo.isCompleted);
            
        default : return currentTodos;
    }
}

export default todosReducer;


/*
action shape 
type
payload
always 
payload-shape
event
id

*/
