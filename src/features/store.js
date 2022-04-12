import { createStore , combineReducers  } from 'redux'
import todosReducer from './reducers/todos'


const store = createStore(combineReducers({todos : todosReducer}))
export default store;