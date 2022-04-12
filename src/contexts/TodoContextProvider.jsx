import React, { useContext, createContext , useMemo , useState} from 'react'


const todoContext = createContext(null)
// compound component pattern is used to eliminate unnecessary rerenders
// i can use React.memo() to do the same functionality
const TodoContextProvider = ({ children }) => {
    const [colors, setColors] = useState([
        'red',
        'orange',
        'blue',
        'green',
        'purple',
    ])
    const [filters, setFilters] = useState({
        status: 'all',
        colors: [],
    })
   

   

    const setTodoFilters = (e) => {
        let newVal
        const target = e.target
        const type = target.type
        const value = target.value
        const name = target.name
        if (type === 'checkbox') {
            const isChecked = target.checked
            if (Array.isArray(filters[name])) {
                const set = new Set([...filters[name]])
                isChecked ? set.add(value) : set.delete(value)
                newVal = Array.from(set)
            } else {
                newVal = isChecked
            }
        } else {
            newVal = value
        }

        setFilters({ ...filters, [name]: newVal })
    }

    const checkColor = (todo) => {
        const selectedColor = filters.colors
        if (
            selectedColor.length === 0 ||
            (selectedColor.length !== 0 && selectedColor.includes(todo.color))
        ) {
            return true
        }
        return false
    }
    const checkStatus = (todo) => {
        const selectedStatus = filters.status
        if (selectedStatus === 'active') {
            return todo.isActive
        } else if (selectedStatus === 'completed') {
            return todo.isCompleted
        } else {
            return true
        }
    }

  
const props = {filters  , setTodoFilters , checkColor , colors  , checkStatus }
    return <todoContext.Provider value={props}>{children}</todoContext.Provider>
}
//consumer
const useTodo = () => useContext(todoContext)

export { TodoContextProvider, useTodo }
